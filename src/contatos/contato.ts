import * as yup from 'yup'
export interface Contato{
    id?: string;
    nome: string;
    idade: string | number;
}

export const validationSchema = yup.object().shape({
    nome:  yup.string()
              .required("Campo obrigatório.")
              .min(5, "Digite pelo menos 5 caracteres."),
    idade: yup.number()
              .required("Campo obrigatório.")
              .min(10, "Idade minima é 10 anos.")
})