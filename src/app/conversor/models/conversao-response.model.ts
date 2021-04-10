export class ConversaoResponse {

    constructor(
        public base?: string,
        public date?: string,
        public rates?: any) {}
}

// Exemplo de chamada
//{"base":"USD","date":"2021-03-31","rates":{"BRL":5.4505}}
