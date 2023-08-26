  document.addEventListener("DOMContentLoaded", function () {
            const tabs = document.querySelectorAll(".tab");
            const tabContents = document.querySelectorAll(".tab-pane");

            tabs.forEach(tab => {
                tab.addEventListener("click", () => {
                    tabs.forEach(t => t.classList.remove("is-active"));
                    tab.classList.add("is-active");

                    const tabId = tab.getAttribute("data-tab");
                    tabContents.forEach(content => {
                        if (content.id === tabId) {
                            content.classList.add("is-active");
                        } else {
                            content.classList.remove("is-active");
                        }
                    });
                });
            });
        });
