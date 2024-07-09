var activeTab = window.location.pathname;
activeTab = activeTab.replace("/", "").replace(".html", "");
document.getElementById(activeTab).classList.add("active");
document.getElementById("pagetitle").innerText = activeTab;
