let products = [];
let pages = {};
let settings = {};
let galleryImages = [];
let snippets = [];

async function loadData() {
    try {
        const response = await fetch('../data/kuwait-products.json');
        products = await response.json();
        
        // Initialize data
        products = products.map(p => ({
            ...p,
            gallery: p.media?.gallery || [],
            seo: p.seo || {}
        }));
        
        // Load pages
        pages = {
            about: { title: 'من نحن', content: '', seo: {} },
            contact: { title: 'اتصل بنا', content: '', seo: {} },
            shipping: { title: 'سياسة الشحن', content: '', seo: {} },
            returns: { title: 'سياسة الاسترجاع', content: '', seo: {} },
            privacy: { title: 'سياسة الخصوصية', content: '', seo: {} }
        };
        
        updateDashboard();
        showToast('تم تحميل البيانات بنجاح!', 'success');
    } catch (error) {
        showToast('خطأ في تحميل البيانات!', 'error');
    }
}

function updateDashboard() {
    document.getElementById('totalProducts').textContent = products.length;
    document.getElementById('totalPages').textContent = Object.keys(pages).length;
    document.getElementById('totalMedia').textContent = products.reduce((sum, p) => sum + (p.gallery?.length || 0), 0);
}

function showSection(section) {
    document.querySelectorAll('.section').forEach(s => s.style.display = 'none');
    document.getElementById(section).style.display = 'block';
    
    document.querySelectorAll('.menu-item').forEach(m => m.classList.remove('active'));
    event.target.closest('.menu-item').classList.add('active');
    
    const titles = {
        dashboard: '<i class="fas fa-chart-line"></i> لوحة المعلومات',
        products: '<i class="fas fa-box"></i> إدارة المنتجات',
        pages: '<i class="fas fa-file-alt"></i> إدارة الصفحات',
        homepage: '<i class="fas fa-home"></i> الصفحة الرئيسية',
        banners: '<i class="fas fa-image"></i> البانرات',
        menus: '<i class="fas fa-bars"></i> القوائم',
        seo: '<i class="fas fa-search"></i> SEO متقدم',
        media: '<i class="fas fa-photo-video"></i> المكتبة',
        settings: '<i class="fas fa-cog"></i> الإعدادات',
        snippets: '<i class="fas fa-code"></i> أكواد مخصصة'
    };
    document.getElementById('pageTitle').innerHTML = titles[section];
    
    if (section === 'products') displayProducts();
    if (section === 'pages') displayPages();
    if (section === 'snippets') displaySnippets();
}

function displaySnippets() {
    const html = snippets.length === 0 ? '<p style="text-align: center; padding: 40px; color: #999;">لا توجد أكواد مخصصة. اضغط "إضافة كود جديد" للبدء</p>' : snippets.map((s, i) => `
        <div class="widget" style="border-right: 4px solid ${s.active ? '#28a745' : '#dc3545'};">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                <div>
                    <h3 style="margin-bottom: 5px;">${s.name}</h3>
                    <small style="color: #666;">${s.description || 'لا يوجد وصف'}</small>
                </div>
                <div style="display: flex; gap: 10px; align-items: center;">
                    <label style="display: flex; align-items: center; gap: 5px;">
                        <input type="checkbox" ${s.active ? 'checked' : ''} onchange="toggleSnippet(${i})">
                        <span>مفعّل</span>
                    </label>
                    <button class="btn btn-primary" style="padding: 8px 15px;" onclick="editSnippet(${i})">
                        <i class="fas fa-edit"></i> تعديل
                    </button>
                    <button class="btn btn-danger" style="padding: 8px 15px;" onclick="deleteSnippet(${i})">
                        <i class="fas fa-trash"></i> حذف
                    </button>
                </div>
            </div>
            <div style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin-top: 10px;">
                <strong>النوع:</strong> ${s.type === 'js' ? 'JavaScript' : s.type === 'css' ? 'CSS' : 'HTML'} | 
                <strong>الموضع:</strong> ${s.location === 'head' ? '<head>' : s.location === 'body' ? '<body>' : 'قبل </body>'}
            </div>
        </div>
    `).join('');
    document.getElementById('snippetsList').innerHTML = html;
}

function addSnippet() {
    const name = prompt('اسم الكود:');
    if (!name) return;
    
    const description = prompt('وصف مختصر (اختياري):');
    const type = prompt('النوع (js/css/html):', 'js');
    const location = prompt('الموضع (head/body/footer):', 'footer');
    const code = prompt('الكود:');
    
    if (!code) return;
    
    snippets.push({
        name,
        description,
        type,
        location,
        code,
        active: true
    });
    
    displaySnippets();
    showToast('تم إضافة الكود!', 'success');
}

function editSnippet(index) {
    const s = snippets[index];
    const name = prompt('اسم الكود:', s.name);
    if (!name) return;
    
    const description = prompt('الوصف:', s.description);
    const type = prompt('النوع (js/css/html):', s.type);
    const location = prompt('الموضع (head/body/footer):', s.location);
    const code = prompt('الكود:', s.code);
    
    if (!code) return;
    
    snippets[index] = { name, description, type, location, code, active: s.active };
    displaySnippets();
    showToast('تم التعديل!', 'success');
}

function deleteSnippet(index) {
    if (confirm('هل أنت متأكد من حذف هذا الكود؟')) {
        snippets.splice(index, 1);
        displaySnippets();
        showToast('تم الحذف!', 'success');
    }
}

function toggleSnippet(index) {
    snippets[index].active = !snippets[index].active;
    displaySnippets();
    showToast(snippets[index].active ? 'تم تفعيل الكود' : 'تم تعطيل الكود', 'success');
}

function displayProducts() {
    const html = `
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>الصورة</th>
                        <th>الاسم</th>
                        <th>الفئة</th>
                        <th>السعر</th>
                        <th>الصور</th>
                        <th>الإجراءات</th>
                    </tr>
                </thead>
                <tbody>
                    ${products.map((p, i) => `
                        <tr>
                            <td><img src="${p.media?.main_image || ''}" class="product-img"></td>
                            <td><strong>${p.title}</strong></td>
                            <td>${p.category || '-'}</td>
                            <td>${parseFloat(p.pricing?.regular || 0).toFixed(3)} د.ك</td>
                            <td><span class="badge badge-success">${(p.gallery?.length || 0) + 1} صورة</span></td>
                            <td class="action-btns">
                                <button style="background: #3498db; color: white;" onclick="editProduct(${i})">
                                    <i class="fas fa-edit"></i> تعديل
                                </button>
                                <button style="background: #e74c3c; color: white;" onclick="deleteProduct(${i})">
                                    <i class="fas fa-trash"></i> حذف
                                </button>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
    document.getElementById('productsList').innerHTML = html;
}

function displayPages() {
    const currentTab = document.querySelector('.tab.active')?.textContent || 'من نحن';
    const pageKey = Object.keys(pages).find(k => pages[k].title === currentTab) || 'about';
    const page = pages[pageKey];
    
    const html = `
        <div class="page-editor">
            <div class="form-group">
                <label>عنوان الصفحة</label>
                <input type="text" id="pageTitle" value="${page.title}" onchange="updatePage('${pageKey}', 'title', this.value)">
            </div>
            <div class="form-group">
                <label>المحتوى</label>
                <div class="editor-toolbar">
                    <button onclick="formatText('bold')"><i class="fas fa-bold"></i></button>
                    <button onclick="formatText('italic')"><i class="fas fa-italic"></i></button>
                    <button onclick="formatText('underline')"><i class="fas fa-underline"></i></button>
                    <button onclick="formatText('h1')">H1</button>
                    <button onclick="formatText('h2')">H2</button>
                    <button onclick="formatText('h3')">H3</button>
                    <button onclick="insertLink()"><i class="fas fa-link"></i></button>
                    <button onclick="insertImage()"><i class="fas fa-image"></i></button>
                </div>
                <textarea class="content-editor" id="pageContent" onchange="updatePage('${pageKey}', 'content', this.value)">${page.content || ''}</textarea>
            </div>
            <h3>إعدادات SEO</h3>
            <div class="form-group">
                <label>Meta Title</label>
                <input type="text" id="pageMetaTitle" value="${page.seo?.metaTitle || ''}" maxlength="60">
            </div>
            <div class="form-group">
                <label>Meta Description</label>
                <textarea id="pageMetaDesc" maxlength="160" rows="3">${page.seo?.metaDescription || ''}</textarea>
            </div>
            <div class="form-group">
                <label>Keywords</label>
                <input type="text" id="pageKeywords" value="${page.seo?.keywords?.join(', ') || ''}">
            </div>
        </div>
    `;
    document.getElementById('pagesContent').innerHTML = html;
}

function switchTab(tab) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
    displayPages();
}

function switchProductTab(tab) {
    document.querySelectorAll('#productModal .tab').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
    
    document.querySelectorAll('#productModal .tab-content').forEach(c => c.classList.remove('active'));
    document.getElementById(tab + '-tab').classList.add('active');
}

function updatePage(pageKey, field, value) {
    if (!pages[pageKey]) pages[pageKey] = {};
    pages[pageKey][field] = value;
}

function openProductModal() {
    document.getElementById('productForm').reset();
    document.getElementById('pEditIndex').value = '';
    galleryImages = [];
    updateGalleryDisplay();
    document.getElementById('productModal').style.display = 'block';
}

function editProduct(index) {
    const p = products[index];
    document.getElementById('pTitle').value = p.title || '';
    document.getElementById('pDescription').value = p.description || '';
    document.getElementById('pCategory').value = p.category || '';
    document.getElementById('pPrice').value = p.pricing?.regular || '';
    document.getElementById('pSalePrice').value = p.pricing?.sale || '';
    document.getElementById('pMainImage').value = p.media?.main_image || '';
    
    document.getElementById('pFocusKeyword').value = p.seo?.focusKeyword || '';
    document.getElementById('pMetaTitle').value = p.seo?.metaTitle || '';
    document.getElementById('pMetaDescription').value = p.seo?.metaDescription || '';
    document.getElementById('pKeywords').value = p.seo?.keywords?.join(', ') || '';
    
    galleryImages = p.gallery || [];
    updateGalleryDisplay();
    
    document.getElementById('pEditIndex').value = index;
    document.getElementById('productModal').style.display = 'block';
}

function deleteProduct(index) {
    if (confirm('هل أنت متأكد من حذف هذا المنتج؟')) {
        products.splice(index, 1);
        displayProducts();
        updateDashboard();
        showToast('تم الحذف!', 'success');
    }
}

function addGalleryImage() {
    const url = prompt('أدخل رابط الصورة:');
    if (url) {
        galleryImages.push(url);
        updateGalleryDisplay();
    }
}

function removeGalleryImage(index) {
    galleryImages.splice(index, 1);
    updateGalleryDisplay();
}

function updateGalleryDisplay() {
    const html = galleryImages.map((img, i) => `
        <div class="gallery-item">
            <img src="${img}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22%3E%3Crect fill=%22%23ddd%22 width=%22100%22 height=%22100%22/%3E%3C/svg%3E'">
            <button class="remove-img" onclick="removeGalleryImage(${i})">×</button>
        </div>
    `).join('');
    document.getElementById('imageGallery').innerHTML = html;
}

function saveProduct(event) {
    event.preventDefault();
    const editIndex = document.getElementById('pEditIndex').value;
    
    const product = {
        id: editIndex ? products[editIndex].id : Date.now(),
        title: document.getElementById('pTitle').value,
        description: document.getElementById('pDescription').value,
        category: document.getElementById('pCategory').value,
        brand: 'متجر الكويت',
        pricing: {
            regular: document.getElementById('pPrice').value,
            sale: document.getElementById('pSalePrice').value || '',
            currency: 'KWD'
        },
        media: {
            main_image: document.getElementById('pMainImage').value,
            gallery: galleryImages
        },
        gallery: galleryImages,
        seo: {
            focusKeyword: document.getElementById('pFocusKeyword').value,
            metaTitle: document.getElementById('pMetaTitle').value,
            metaDescription: document.getElementById('pMetaDescription').value,
            keywords: document.getElementById('pKeywords').value.split(',').map(k => k.trim()).filter(k => k)
        }
    };
    
    if (editIndex) {
        products[editIndex] = product;
        showToast('تم التعديل بنجاح!', 'success');
    } else {
        products.push(product);
        showToast('تم الإضافة بنجاح!', 'success');
    }
    
    displayProducts();
    updateDashboard();
    closeProductModal();
}

function closeProductModal() {
    document.getElementById('productModal').style.display = 'none';
}

function saveAll() {
    const data = {
        products: products,
        pages: pages,
        settings: {
            phone: document.getElementById('phone')?.value,
            email: document.getElementById('email')?.value,
            primaryColor: document.getElementById('primaryColor')?.value,
            secondaryColor: document.getElementById('secondaryColor')?.value,
            siteTitle: document.getElementById('siteTitle')?.value,
            siteDescription: document.getElementById('siteDescription')?.value,
            siteKeywords: document.getElementById('siteKeywords')?.value,
            homeTitle: document.getElementById('homeTitle')?.value,
            homeSlogan: document.getElementById('homeSlogan')?.value,
            homeWelcome: document.getElementById('homeWelcome')?.value
        },
        tracking: {
            ga4Id: document.getElementById('ga4Id')?.value,
            gtmId: document.getElementById('gtmId')?.value,
            gscVerification: document.getElementById('gscVerification')?.value,
            googleAdsId: document.getElementById('googleAdsId')?.value,
            fbPixel: document.getElementById('fbPixel')?.value,
            fbDomainVerification: document.getElementById('fbDomainVerification')?.value,
            snapchatPixel: document.getElementById('snapchatPixel')?.value,
            tiktokPixel: document.getElementById('tiktokPixel')?.value,
            twitterPixel: document.getElementById('twitterPixel')?.value,
            pinterestTag: document.getElementById('pinterestTag')?.value,
            linkedinId: document.getElementById('linkedinId')?.value,
            customHeadCode: document.getElementById('customHeadCode')?.value,
            customBodyCode: document.getElementById('customBodyCode')?.value,
            customFooterCode: document.getElementById('customFooterCode')?.value
        }
    };
    
    // Save products
    const json = JSON.stringify(products, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'kuwait-products.json';
    a.click();
    
    // Save all settings
    const settingsJson = JSON.stringify(data, null, 2);
    const settingsBlob = new Blob([settingsJson], { type: 'application/json' });
    const settingsUrl = URL.createObjectURL(settingsBlob);
    const settingsLink = document.createElement('a');
    settingsLink.href = settingsUrl;
    settingsLink.download = 'site-settings.json';
    settingsLink.click();
    
    showToast('✅ تم حفظ كل التغييرات! استبدل الملفات في المشروع', 'success');
}

function saveTracking() {
    showToast('✅ تم حفظ أكواد التتبع! اضغط "حفظ كل التغييرات" لتنزيل الملفات', 'success');
}

function previewSite() {
    window.open('http://localhost:8000', '_blank');
}

function formatText(command) {
    document.execCommand(command, false, null);
}

function insertLink() {
    const url = prompt('أدخل الرابط:');
    if (url) {
        document.execCommand('createLink', false, url);
    }
}

function insertImage() {
    const url = prompt('أدخل رابط الصورة:');
    if (url) {
        document.execCommand('insertImage', false, url);
    }
}

function addBanner() {
    const url = prompt('أدخل رابط البانر:');
    if (url) {
        showToast('تم إضافة البانر!', 'success');
    }
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

loadData();
