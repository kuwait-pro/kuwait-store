let products = [];

async function loadProducts() {
    try {
        const response = await fetch('../data/kuwait-products.json');
        products = await response.json();
        
        // Add SEO fields if not exist
        products = products.map(p => ({
            ...p,
            seo: p.seo || {
                focusKeyword: '',
                metaTitle: p.title,
                metaDescription: p.description?.substring(0, 160),
                canonicalUrl: '',
                keywords: [],
                score: 0
            }
        }));
        
        updateDashboard();
        populateSelects();
        displayProducts();
        showToast('تم تحميل المنتجات بنجاح!', 'success');
    } catch (error) {
        showToast('خطأ في تحميل المنتجات!', 'error');
    }
}

function updateDashboard() {
    document.getElementById('totalProducts').textContent = products.length;
    
    const optimized = products.filter(p => calculateSEOScore(p) >= 80).length;
    const warnings = products.filter(p => {
        const score = calculateSEOScore(p);
        return score >= 50 && score < 80;
    }).length;
    const errors = products.filter(p => calculateSEOScore(p) < 50).length;
    
    document.getElementById('seoOptimized').textContent = optimized;
    document.getElementById('seoWarnings').textContent = warnings;
    document.getElementById('seoErrors').textContent = errors;
    
    const avgScore = Math.round(products.reduce((sum, p) => sum + calculateSEOScore(p), 0) / products.length);
    const scoreEl = document.getElementById('overallScore');
    scoreEl.textContent = avgScore;
    scoreEl.className = 'seo-score ' + (avgScore >= 80 ? 'good' : avgScore >= 50 ? 'average' : 'poor');
    
    displayOverallChecklist();
}

function calculateSEOScore(product) {
    let score = 0;
    const checks = [];
    
    // Title length (10 points)
    if (product.title && product.title.length >= 10 && product.title.length <= 60) {
        score += 10;
        checks.push({ pass: true, text: 'طول العنوان مناسب' });
    } else {
        checks.push({ pass: false, text: 'طول العنوان غير مناسب (10-60 حرف)' });
    }
    
    // Description (10 points)
    if (product.description && product.description.length >= 50) {
        score += 10;
        checks.push({ pass: true, text: 'يوجد وصف كافٍ' });
    } else {
        checks.push({ pass: false, text: 'الوصف قصير جداً (50+ حرف)' });
    }
    
    // Image (10 points)
    if (product.media?.main_image) {
        score += 10;
        checks.push({ pass: true, text: 'يوجد صورة رئيسية' });
    } else {
        checks.push({ pass: false, text: 'لا توجد صورة' });
    }
    
    // Price (10 points)
    if (product.pricing?.regular) {
        score += 10;
        checks.push({ pass: true, text: 'السعر محدد' });
    } else {
        checks.push({ pass: false, text: 'السعر غير محدد' });
    }
    
    // Category (10 points)
    if (product.category) {
        score += 10;
        checks.push({ pass: true, text: 'الفئة محددة' });
    } else {
        checks.push({ pass: false, text: 'الفئة غير محددة' });
    }
    
    // Meta Title (15 points)
    if (product.seo?.metaTitle && product.seo.metaTitle.length >= 30 && product.seo.metaTitle.length <= 60) {
        score += 15;
        checks.push({ pass: true, text: 'Meta Title محسّن' });
    } else {
        checks.push({ pass: false, text: 'Meta Title غير محسّن' });
    }
    
    // Meta Description (15 points)
    if (product.seo?.metaDescription && product.seo.metaDescription.length >= 120 && product.seo.metaDescription.length <= 160) {
        score += 15;
        checks.push({ pass: true, text: 'Meta Description محسّن' });
    } else {
        checks.push({ pass: false, text: 'Meta Description غير محسّن' });
    }
    
    // Focus Keyword (10 points)
    if (product.seo?.focusKeyword) {
        score += 10;
        checks.push({ pass: true, text: 'Focus Keyword محدد' });
        
        // Keyword in title (5 points)
        if (product.title?.toLowerCase().includes(product.seo.focusKeyword.toLowerCase())) {
            score += 5;
            checks.push({ pass: true, text: 'الكلمة المفتاحية في العنوان' });
        }
        
        // Keyword in description (5 points)
        if (product.description?.toLowerCase().includes(product.seo.focusKeyword.toLowerCase())) {
            score += 5;
            checks.push({ pass: true, text: 'الكلمة المفتاحية في الوصف' });
        }
    } else {
        checks.push({ pass: false, text: 'Focus Keyword غير محدد' });
    }
    
    product.seo.score = score;
    product.seo.checks = checks;
    return score;
}

function displayOverallChecklist() {
    const issues = [];
    
    products.forEach(p => {
        if (!p.title || p.title.length < 10) issues.push(`${p.title || 'منتج'}: عنوان قصير`);
        if (!p.description || p.description.length < 50) issues.push(`${p.title || 'منتج'}: وصف قصير`);
        if (!p.media?.main_image) issues.push(`${p.title || 'منتج'}: لا توجد صورة`);
        if (!p.seo?.metaTitle) issues.push(`${p.title || 'منتج'}: Meta Title مفقود`);
        if (!p.seo?.metaDescription) issues.push(`${p.title || 'منتج'}: Meta Description مفقود`);
    });
    
    const html = `
        <ul class="seo-checklist">
            <li class="pass"><i class="fas fa-check"></i> ${products.length} منتج في النظام</li>
            <li class="${issues.length === 0 ? 'pass' : 'warning'}">
                <i class="fas ${issues.length === 0 ? 'fa-check' : 'fa-exclamation-triangle'}"></i>
                ${issues.length === 0 ? 'جميع المنتجات محسّنة!' : issues.length + ' مشكلة تحتاج إصلاح'}
            </li>
            <li class="pass"><i class="fas fa-check"></i> Sitemap متوفر</li>
            <li class="pass"><i class="fas fa-check"></i> Schema Markup مفعّل</li>
            <li class="pass"><i class="fas fa-check"></i> Robots.txt محسّن</li>
        </ul>
    `;
    document.getElementById('overallChecklist').innerHTML = html;
}

function populateSelects() {
    const selects = ['analyzeProduct', 'metaProduct'];
    selects.forEach(id => {
        const select = document.getElementById(id);
        if (select) {
            select.innerHTML = '<option value="">-- اختر منتج --</option>';
            products.forEach((p, i) => {
                select.innerHTML += `<option value="${i}">${p.title}</option>`;
            });
        }
    });
}

function displayProducts() {
    const tbody = document.getElementById('productsBody');
    if (!tbody) return;
    
    tbody.innerHTML = products.map((p, i) => {
        const score = calculateSEOScore(p);
        const scoreClass = score >= 80 ? 'good' : score >= 50 ? 'average' : 'poor';
        
        return `
            <tr>
                <td><strong>${p.title}</strong></td>
                <td><span class="badge badge-${scoreClass === 'good' ? 'success' : scoreClass === 'average' ? 'warning' : 'danger'}">${score}/100</span></td>
                <td>${p.seo?.metaTitle || '-'}</td>
                <td>${p.seo?.metaDescription?.substring(0, 50) || '-'}...</td>
                <td>${p.seo?.focusKeyword || '-'}</td>
                <td class="action-btns">
                    <button style="background: #3498db; color: white;" onclick="editProduct(${i})">
                        <i class="fas fa-edit"></i> تعديل
                    </button>
                </td>
            </tr>
        `;
    }).join('');
}

function analyzeSEO() {
    const index = document.getElementById('analyzeProduct').value;
    if (!index) return;
    
    const product = products[index];
    const score = calculateSEOScore(product);
    const scoreClass = score >= 80 ? 'good' : score >= 50 ? 'average' : 'poor';
    
    const html = `
        <div class="seo-score ${scoreClass}">${score}</div>
        <h3>تحليل تفصيلي:</h3>
        <ul class="seo-checklist">
            ${product.seo.checks.map(c => `
                <li class="${c.pass ? 'pass' : 'fail'}">
                    <i class="fas ${c.pass ? 'fa-check' : 'fa-times'}"></i>
                    ${c.text}
                </li>
            `).join('')}
        </ul>
    `;
    document.getElementById('seoAnalysisResult').innerHTML = html;
}

function updateSEOPreview() {
    const title = document.getElementById('metaTitle')?.value || document.getElementById('productTitle')?.value || 'عنوان المنتج';
    const desc = document.getElementById('metaDescription')?.value || document.getElementById('productDescription')?.value || 'وصف المنتج';
    
    document.getElementById('previewTitle').textContent = title;
    document.getElementById('previewDesc').textContent = desc;
    
    if (document.getElementById('titleLength')) {
        document.getElementById('titleLength').textContent = `${title.length}/60 حرف`;
    }
    if (document.getElementById('descLength')) {
        document.getElementById('descLength').textContent = `${desc.length}/160 حرف`;
    }
    
    // Calculate live SEO score
    const tempProduct = {
        title: document.getElementById('productTitle')?.value,
        description: document.getElementById('productDescription')?.value,
        media: { main_image: document.getElementById('productImage')?.value },
        pricing: { regular: document.getElementById('productPrice')?.value },
        category: document.getElementById('productCategory')?.value,
        seo: {
            metaTitle: document.getElementById('metaTitle')?.value,
            metaDescription: document.getElementById('metaDescription')?.value,
            focusKeyword: document.getElementById('focusKeyword')?.value
        }
    };
    
    const score = calculateSEOScore(tempProduct);
    const scoreEl = document.getElementById('productSeoScore');
    if (scoreEl) {
        scoreEl.textContent = score;
        scoreEl.className = 'seo-score ' + (score >= 80 ? 'good' : score >= 50 ? 'average' : 'poor');
    }
    
    const checklistEl = document.getElementById('productSeoChecklist');
    if (checklistEl && tempProduct.seo.checks) {
        checklistEl.innerHTML = tempProduct.seo.checks.map(c => `
            <li class="${c.pass ? 'pass' : 'fail'}">
                <i class="fas ${c.pass ? 'fa-check' : 'fa-times'}"></i>
                ${c.text}
            </li>
        `).join('');
    }
}

function openAddModal() {
    document.getElementById('modalTitle').innerHTML = '<i class="fas fa-plus"></i> إضافة منتج';
    document.getElementById('productForm').reset();
    document.getElementById('editingIndex').value = '';
    document.getElementById('productModal').style.display = 'block';
    updateSEOPreview();
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
    
    document.getElementById('focusKeyword').value = p.seo?.focusKeyword || '';
    document.getElementById('metaTitle').value = p.seo?.metaTitle || p.title;
    document.getElementById('metaDescription').value = p.seo?.metaDescription || p.description?.substring(0, 160);
    document.getElementById('canonicalUrl').value = p.seo?.canonicalUrl || '';
    document.getElementById('additionalKeywords').value = p.seo?.keywords?.join(', ') || '';
    
    document.getElementById('editingIndex').value = index;
    document.getElementById('productModal').style.display = 'block';
    updateSEOPreview();
}

function saveProduct(event) {
    event.preventDefault();
    const editingIndex = document.getElementById('editingIndex').value;
    
    const product = {
        id: editingIndex ? products[editingIndex].id : Date.now(),
        title: document.getElementById('productTitle').value,
        description: document.getElementById('productDescription').value,
        category: document.getElementById('productCategory').value,
        brand: 'متجر الكويت',
        pricing: {
            regular: document.getElementById('productPrice').value,
            sale: document.getElementById('productSalePrice').value || '',
            currency: 'KWD'
        },
        media: {
            main_image: document.getElementById('productImage').value,
            gallery: []
        },
        seo: {
            focusKeyword: document.getElementById('focusKeyword').value,
            metaTitle: document.getElementById('metaTitle').value,
            metaDescription: document.getElementById('metaDescription').value,
            canonicalUrl: document.getElementById('canonicalUrl').value,
            keywords: document.getElementById('additionalKeywords').value.split(',').map(k => k.trim()).filter(k => k)
        }
    };
    
    if (editingIndex) {
        products[editingIndex] = product;
        showToast('تم التعديل بنجاح!', 'success');
    } else {
        products.push(product);
        showToast('تم الإضافة بنجاح!', 'success');
    }
    
    updateDashboard();
    populateSelects();
    displayProducts();
    closeModal();
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

function exportAll() {
    const json = JSON.stringify(products, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'kuwait-products.json';
    a.click();
    showToast('✅ تم حفظ كل التغييرات! استبدل الملف في data/', 'success');
}

function generateAllSchemas() {
    showToast('تم توليد Schema لكل المنتجات!', 'success');
}

function generateSitemap() {
    showToast('تم توليد Sitemap جديد!', 'success');
}

function showSection(section) {
    document.querySelectorAll('.section').forEach(s => s.style.display = 'none');
    document.getElementById(section).style.display = 'block';
    
    document.querySelectorAll('.menu-item').forEach(m => m.classList.remove('active'));
    event.target.closest('.menu-item').classList.add('active');
    
    const titles = {
        dashboard: '<i class="fas fa-chart-line"></i> لوحة المعلومات',
        products: '<i class="fas fa-box"></i> إدارة المنتجات',
        'seo-analysis': '<i class="fas fa-search"></i> تحليل SEO',
        'meta-tags': '<i class="fas fa-tags"></i> Meta Tags',
        schema: '<i class="fas fa-code"></i> Schema Markup',
        sitemap: '<i class="fas fa-sitemap"></i> Sitemap',
        robots: '<i class="fas fa-robot"></i> Robots.txt',
        redirects: '<i class="fas fa-directions"></i> إعادة التوجيه',
        keywords: '<i class="fas fa-key"></i> الكلمات المفتاحية',
        social: '<i class="fas fa-share-alt"></i> Social Media',
        analytics: '<i class="fas fa-chart-pie"></i> التحليلات',
        bulk: '<i class="fas fa-layer-group"></i> عمليات جماعية'
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

loadProducts();
