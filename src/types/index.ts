export type StackItem = {
    name: string
    icon: string
}

export type Stack = {
    frontend: StackItem[]
    backend: StackItem[]
    languages: StackItem[]
    databases: StackItem[]
    adminSys: StackItem[]
    clouds: StackItem[]
}

export type Tool = {
    name: string
    icon: string
}

export type Certification = {
    icon: string
    institution: string
    name: string
    url: string
}

export type Position = {
    contract: string
    description: string
    end: string
    position: string
    start: string
}

export type WorkEntry = {
    duration: string
    logo: string
    name: string
    positions: Position[]
}

export type EducationEntry = {
    degree: string
    description: string
    end: string
    institution: string
    logo: string
    start: string
}