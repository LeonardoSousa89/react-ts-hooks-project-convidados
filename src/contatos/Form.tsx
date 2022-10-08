//pode ser escrito desta forma neste arquivo ou da outra forma escrita nos outros
// import React ,{ FC }from 'react'

import './index.css'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import { Contato, validationSchema } from './contato'
import { useFormik, FormikHelpers } from 'formik'

interface ContatoFormProps {
    contato : Contato;
    submeterFormulario: (contato: Contato) => void;
}

export const ContatosForm: React.FC<ContatoFormProps> = ({ 
    contato,
    submeterFormulario 
}:ContatoFormProps) => {

    const onSubmit = (contato: Contato, helper: FormikHelpers<Contato>) => {
        submeterFormulario(contato)
        helper.resetForm()
    }

    const formik = useFormik<Contato>({
        onSubmit,
        initialValues: { ...contato },
        validationSchema: validationSchema,
        validateOnChange: false
    })


    return(
        <form onSubmit={formik.handleSubmit}>
            
            <Grid container={true}>
                
                <Grid item xs={12}>
                    <TextField className="full-width"
                               variant="outlined" 
                               name="nome"
                               label="Nome"
                               id="inputNome"
                               value={formik.values.nome}
                               onChange={formik.handleChange} 
                    />

                    <span className="error-msg">{formik.errors.nome}</span>
                </Grid>

                <Grid item xs={12}>
                    <TextField  className="full-width"
                                variant="outlined" 
                                name="idade"
                                label="Idade"
                                id="inputIdade"
                                value={formik.values.idade} 
                                onChange={formik.handleChange} 
                    />

                    <span className="error-msg">{formik.errors.idade}</span>
                </Grid>

                <Grid item xs={12}>
                    <Button className="full-width"
                            type="submit" 
                            variant="contained" 
                            color="primary">
                        Adicionar
                    </Button>
                </Grid>

            </Grid>

         </form>
    )
}
