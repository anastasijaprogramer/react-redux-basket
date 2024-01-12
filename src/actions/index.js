//two ways to return an object
export const add = (id) => {
    return {
        type: "ADD",
        id
    }
}

export const remove = (id) => {
    return {
        type: "REMOVE",
        id
    }
}