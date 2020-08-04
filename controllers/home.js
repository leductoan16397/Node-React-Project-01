const dataCtrl = require('../data/dataCtrl');

const getProducts = (houseType, location) => {
    let products = dataCtrl.readData().products;

    if (houseType != 0 && location != 0) {
        products = products.filter(item => {
            return item.houseType == houseType && item.location == location;
        })
        return products
    } else if (houseType == 0 && location != 0) {
        products = products.filter(item => {
            return item.location == location;
        })
        return products
    } else if (houseType != 0 && location == 0) {
        products = products.filter(item => {
            return item.houseType == houseType;
        })
        return products
    } else {
        return products;
    }
}

const getHouseTypeList = () => {
    let houseType = dataCtrl.readData().houseType;
    return houseType;
}

const getLocationList = () => {
    let location = dataCtrl.readData().location;
    return location;
}

const getProjectTypeList = () => {
    let projectType = dataCtrl.readData().projectType;
    return projectType;
}

module.exports = { getProducts, getHouseTypeList, getLocationList, getProjectTypeList };