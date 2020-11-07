
const memoContainer =()=>{
    const cacheContainers = {};

    return (containerId)=>{
        if (containerId in cacheContainers) {
            console.log(containerId + ' obteniendo desde la cache');
            return cacheContainers[containerId];
        }
        console.log(containerId + ' obteniendolo desde el DOM');
        return document.getElementById(containerId)
    }
}

export default memoContainer;