import getById from "./getId.utils";

class Alert {
    show(idAlert) {
        const alert = getById(idAlert);
        alert.style.display = "block";
        this._hideAlert(alert);
    }

    _hideAlert(alertElement) {
        setTimeout(() => {
            alertElement.style.display = "none";
        }, 4000);
    }
}

export default new Alert();
