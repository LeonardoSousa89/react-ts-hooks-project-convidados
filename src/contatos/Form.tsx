//pode ser escrito desta forma neste arquivo ou da outra forma escrita nos outros
// import React ,{ FC }from 'react'

import './index.css'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import { Contato } from './contato'
import { useFormik, FormikHelpers } from 'formik'

interface ContatoFormProps {
    contato? : Contato;
}

export const ContatosForm: React.FC<ContatoFormProps> = ({ contato }:ContatoFormProps) => {

    const formik = useFormik<Contato>({
        onSubmit: (c: Contato) => console.log(c),
        initialValues: { nome: '', idade: ''}
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
