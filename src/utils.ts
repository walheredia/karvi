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