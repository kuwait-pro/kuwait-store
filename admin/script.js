let products = [];
let filteredProducts = [];
let currentPage = 1;
const itemsPerPage = 10;
let selectedProducts = new Set();

// Load products on start
async function loadProducts() {
    try {
        const response = await fetch('../data/kuwait-products.json');
        products = await response.json();
        filteredProducts = [...products];
        displayProducts();
        updateStats();
        updateCategoryFilters();
        showToast('تم تحميل المنتجات بنجاح!', 'success');
    } catch (error) {
        showToast('خطأ في تحميل المنتجات!', 'error');
    }
}

function updateStats() {
    document.getElementById('totalProducts').textContent = products.length;
    const categories = [...new Set(products.map(p => p.category).filter(Boolean))];
    document.getElementById('totalCategories').textContent = categories.length;
    const avgPrice = products.reduce((sum, p) => sum + parseFloat(p.pricing?.regular || 0), 0) / products.length;
    document.getElementById('avgPrice').textContent = avgPrice.toFixed(3);
    const saleProducts = products.filter(p => p.pricing?.sale && parseFloat(p.pricing.sale) > 0);
    document.getElementById('saleProducts').textContent = saleProducts.length;
}

function displayProducts() {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedProducts = filteredProducts.slice(start, end);
    
    const tbody = document.getElementById('productsBody');
    tbody.innerHTML = paginatedProducts.map((p, index) => {
        const globalIndex = products.indexOf(p);
        const price = parseFloat(p.pricing?.regular || 0);
        const salePrice = parseFloat(p.pricing?.sale || 0);
        const hasDiscount = salePrice > 0 && salePrice < price;
        
        return `
            <tr>
                <td><input type="checkbox" class="checkbox product-checkbox" data-index="${globalIndex}" ${selectedProducts.has(globalIndex) ? 'checked' : ''}></td>
                <td><img src="${p.media?.main_image || ''}" class="product-img" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22%3E%3Crect fill=%22%23ddd%22 width=%22100%22 height=%22100%22/%3E%3C/svg%3E'"></td>
                <td><strong>${p.title}</strong></td>
                <td><span class="badge badge-success">${p.category || '-'}</span></td>
                <td>
                    ${hasDiscount ? `<span style="text-decoration: line-through; color: #999;">${price.toFixed(3)}</span><br><strong style="color: #e74c3c;">${salePrice.toFixed(3)} د.ك</strong>` : `<strong>${price.toFixed(3)} د.ك</strong>`}
                </td>
                <td>${hasDiscount ? '<span class="badge badge-warning">تخفيض</span>' : '<span class="badge badge-success">عادي</span>'}</td>
                <td class="action-btns">
                    <button style="background: #3498db; color: white;" onclick="editProduct(${globalIndex})">
                        <i class="fas fa-edit"></i> تعديل
                    </button>
                    <button style="background: #e74c3c; color: white;" onclick="deleteProduct(${globalIndex})">
                        <i class="fas fa-trash"></i> حذف
                    </button>
                </td>
            </tr>
        `;
    }).join('');
    
    updatePagination();
    attachCheckboxListeners();
}

function attachCheckboxListeners() {
    document.querySelectorAll('.product-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const index = parseInt(this.dataset.index);
            if (this.checked) {
                selectedProducts.add(index);
            } else {
                selectedProducts.delete(index);
            }
        });
    });
}

function updatePagination() {
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const pagination = document.getElementById('pagination');
    
    let html = '';
    if (currentPage > 1) {
        html += `<button onclick="changePage(${currentPage - 1})"><i class="fas fa-chevron-right"></i></button>`;
    }
    
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
            html += `<button class="${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
        } else if (i === currentPage - 3 || i === currentPage + 3) {
            html += `<button disabled>...</button>`;
        }
    }
    
    if (currentPage < totalPages) {
        html += `<button onclick="changePage(${currentPage + 1})"><i class="fas fa-chevron-left"></i></button>`;
    }
    
    pagination.innerHTML = html;
}

function changePage(page) {
    currentPage = page;
    displayProducts();
}

function filterProducts() {
    const search = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    const priceRange = document.getElementById('priceFilter').value;
    
    filteredProducts = products.filter(p => {
        const matchSearch = !search || p.title?.toLowerCase().includes(search) || p.category?.toLowerCase().includes(search);
        const matchCategory = !category || p.category === category;
        
        let matchPrice = true;
        if (priceRange) {
            const price = parseFloat(p.pricing?.regular || 0);
            if (priceRange === '0-5') matchPrice = price >= 0 && price <= 5;
            else if (priceRange === '5-10') matchPrice = price > 5 && price <= 10;
            else if (priceRange === '10-20') matchPrice = price > 10 && price <= 20;
            else if (priceRange === '20+') matchPrice = price > 20;
        }
        
        return matchSearch && matchCategory && matchPrice;
    });
    
    currentPage = 1;
    displayProducts();
}

function updateCategoryFilters() {
    const categories = [...new Set(products.map(p => p.category).filter(Boolean))];
    const categoryFilter = document.getElementById('categoryFilter');
    const bulkCategory = document.getElementById('bulkCategory');
    const categoriesList = document.getElementById('categoriesList');
    
    categories.forEach(cat => {
        categoryFilter.innerHTML += `<option value="${cat}">${cat}</option>`;
        if (bulkCategory) bulkCategory.innerHTML += `<option value="${cat}">${cat}</option>`;
        if (categoriesList) categoriesList.innerHTML += `<option value="${cat}">`;
    });
}

function toggleSelectAll() {
    const selectAll = document.getElementById('selectAll').checked;
    selectedProducts.clear();
    if (selectAll) {
        filteredProducts.forEach((p, i) => selectedProducts.add(products.indexOf(p)));
    }
    displayProducts();
}

function openAddModal() {
    document.getElementById('modalTitle').innerHTML = '<i class="fas fa-plus"></i> إضافة منتج جديد';
    document.getElementById('productForm').reset();
    document.getElementById('editingIndex').value = '';
    document.getElementById('productModal').style.display = 'block';
}

function editProduct(index) {
    const p = products[index];
    document.getElementById('modalTitle').innerHTML = '<i class="fas fa-edit"></i> تعديل المنتج';
    document.getElementById('productTitle').value = p.title || '';
    document.getElementById('productDescription').value = p.description || '';
    document.getElementById('productCategory').value = p.category || '';
    document.getElementById('productPrice').value = p.pricing?.regular || '';
    document.getElementById('productSalePrice').value = p.pricing?.sale || '';
    document.getElementById('productImage').value = p.media?.main_image || '';
    document.getElementById('productBrand').value = p.brand || '';
    document.getElementById('editingIndex').value = index;
    document.getElementById('productModal').style.display = 'block';
}

function deleteProduct(index) {
    if (confirm('هل أنت متأكد من حذف هذا المنتج؟')) {
        products.splice(index, 1);
        filteredProducts = [...products];
        displayProducts();
        updateStats();
        showToast('تم الحذف! اضغط "تصدير" لحفظ التغييرات.', 'warning');
    }
}

function bulkDelete() {
    if (selectedProducts.size === 0) {
        showToast('الرجاء تحديد منتجات للحذف', 'warning');
        return;
    }
    
    if (confirm(`هل تريد حذف ${selectedProducts.size} منتج؟`)) {
        const indices = Array.from(selectedProducts).sort((a, b) => b - a);
        indices.forEach(i => products.splice(i, 1));
        selectedProducts.clear();
        filteredProducts = [...products];
        displayProducts();
        updateStats();
        showToast('تم الحذف الجماعي!', 'success');
    }
}

function saveProduct(event) {
    event.preventDefault();
    const editingIndex = document.getElementById('editingIndex').value;
    
    const product = {
        id: editingIndex ? products[editingIndex].id : Date.now(),
        title: document.getElementById('productTitle').value,
        description: document.getElementById('productDescription').value,
        category: document.getElementById('productCategory').value,
        brand: document.getElementById('productBrand').value || 'متجر الكويت',
        pricing: {
            regular: document.getElementById('productPrice').value,
            sale: document.getElementById('productSalePrice').value || '',
            currency: 'KWD'
        },
        media: {
            main_image: document.getElementById('productImage').value,
            gallery: []
        }
    };
    
    if (editingIndex) {
        products[editingIndex] = product;
        showToast('تم التعديل بنجاح!', 'success');
    } else {
        products.push(product);
        showToast('تم الإضافة بنجاح!', 'success');
    }
    
    filteredProducts = [...products];
    displayProducts();
    updateStats();
    closeModal();
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

function exportProducts() {
    const json = JSON.stringify(products, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'kuwait-products.json';
    a.click();
    showToast('✅ تم تحميل الملف! استبدل الملف في data/', 'success');
}

function exportCSV() {
    let csv = 'ID,الاسم,الفئة,السعر,سعر التخفيض,البراند,الصورة\n';
    products.forEach(p => {
        csv += `${p.id},"${p.title}","${p.category}",${p.pricing?.regular},${p.pricing?.sale || ''},"${p.brand}","${p.media?.main_image}"\n`;
    });
    
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'products.csv';
    a.click();
    showToast('تم تصدير CSV!', 'success');
}

function importProducts(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                products = JSON.parse(e.target.result);
                filteredProducts = [...products];
                displayProducts();
                updateStats();
                showToast('تم الاستيراد بنجاح!', 'success');
            } catch (error) {
                showToast('خطأ في قراءة الملف!', 'error');
            }
        };
        reader.readAsText(file);
    }
}

function applyBulkDiscount() {
    const category = document.getElementById('bulkCategory').value;
    const discount = parseFloat(document.getElementById('bulkDiscount').value);
    
    if (!category || !discount) {
        showToast('الرجاء اختيار الفئة ونسبة التخفيض', 'warning');
        return;
    }
    
    let count = 0;
    products.forEach(p => {
        if (p.category === category) {
            const regular = parseFloat(p.pricing?.regular || 0);
            p.pricing.sale = (regular * (1 - discount / 100)).toFixed(3);
            count++;
        }
    });
    
    displayProducts();
    showToast(`تم تطبيق التخفيض على ${count} منتج!`, 'success');
}

function showSection(section) {
    document.querySelectorAll('.section').forEach(s => s.style.display = 'none');
    document.getElementById(section).style.display = 'block';
    
    document.querySelectorAll('.menu-item').forEach(m => m.classList.remove('active'));
    event.target.closest('.menu-item').classList.add('active');
    
    const titles = {
        dashboard: '<i class="fas fa-chart-line"></i> لوحة المعلومات',
        products: '<i class="fas fa-box"></i> إدارة المنتجات',
        categories: '<i class="fas fa-tags"></i> إدارة الفئات',
        bulk: '<i class="fas fa-layer-group"></i> عمليات جماعية',
        import: '<i class="fas fa-file-import"></i> استيراد وتصدير',
        settings: '<i class="fas fa-cog"></i> الإعدادات'
    };
    document.getElementById('pageTitle').innerHTML = titles[section];
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;
    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
}

// Load on start
loadProducts();
