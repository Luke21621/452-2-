document.getElementById('searchBox').addEventListener('keyup', function() {
    const query = this.value.toLowerCase();
    const products = document.querySelectorAll('.page2-A');

    products.forEach(product => {
        const modelName = product.querySelector('.page2-B > p:first-child').textContent.toLowerCase();
        if (modelName.includes(query)) {
            // 滚动到匹配的产品
            product.scrollIntoView({ behavior: 'smooth' });
        }
    });
    // 如果没有输入任何内容，显示所有产品
    if (query === '') {
        products.forEach(product => {
            product.style.display = '';
        });
    }
});