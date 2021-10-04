module.exports = (Franz) => {
    const getMessages = function getMessages() {
        const notificationsCounter = document.querySelector('.js-notificationsCounter');
        const count = parseInt(notificationsCounter.textContent, 10);

        Franz.setBadge(count);
    };

    Franz.loop(getMessages);
};
