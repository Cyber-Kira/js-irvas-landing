const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
    tab = document.querySelectorAll(tabSelector),
    content = document.querySelector(contentSelector);

    const hideTabContent = () => { //07:08
        content.forEach(item => {
            item.style.display = 'none';
        });
    };

    const showTabContent = () => {

    };
};

export default tabs;