export const toNumber = (str:string):number => {
    try{
        return +str
    } catch (error){
        throw error
    }
}

export const brToNumber = (str:string):number => {
    try{
        const AssemblyModel = str.split('/');
        return +AssemblyModel[0]
    } catch (error){
        throw error
    }
}

export const sayHello = ():string => {
    return '  _  __                _      _    ____ ___ \n' +
        ' | |/ /__ _ _ ____   _(_)    / \\  |  _ |_ _|\n' +
        ' | \' // _` | \'__\\ \\ / | |   / _ \\ | |_) | | \n' +
        ' | . | (_| | |   \\ V /| |  / ___ \\|  __/| | \n' +
        ' |_|\\_\\__,_|_|    \\_/ |_| /_/   \\_|_|  |___|\n'
}