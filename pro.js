document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(accordion => {
        accordion.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);

            // Toggle the target content
            targetContent.classList.toggle('open');

            // Optionally, you can close other sections
            // accordions.forEach(item => {
            //     if (item !== this) {
            //         const otherContent = document.getElementById(item.getAttribute('data-target'));
            //         otherContent.classList.remove('open');
            //     }
            // });
        });
    });
});
