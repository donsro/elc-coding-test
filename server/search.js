const search = (data = [], keyword = '') => {
    const result = data.filter(dataItem => {
        const propNames = ['name', 'about', 'tags'];
        for (const val of propNames) {
            if (dataItem[val] && dataItem[val].includes(keyword)) {
                return true;
            }
        }
        return false;
    });
    return result;
}

module.exports = search;
