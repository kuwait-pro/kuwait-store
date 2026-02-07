// Code Snippets Functions

let snippets = [];

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
            <div style="background: #f8f9fa; padding: 10px; border-radius: 5px;">
                <strong>النوع:</strong> ${s.type === 'js' ? 'JavaScript' : s.type === 'css' ? 'CSS' : 'HTML'} | 
                <strong>الموضع:</strong> ${s.location === 'head' ? '<head>' : s.location === 'body' ? '<body>' : 'قبل </body>'}
            </div>
            <pre style="background: #2c3e50; color: #ecf0f1; padding: 15px; border-radius: 5px; overflow-x: auto; margin-top: 10px;">${s.code}</pre>
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
    
    snippets.push({ name, description, type, location, code, active: true });
    displaySnippets();
    showToast('تم إضافة الكود!', 'success');
}

function editSnippet(index) {
    const s = snippets[index];
    const code = prompt('الكود:', s.code);
    if (code) {
        snippets[index].code = code;
        displaySnippets();
        showToast('تم التعديل!', 'success');
    }
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
}
