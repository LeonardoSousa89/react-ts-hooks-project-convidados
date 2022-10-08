import React, { FC } from 'react';
import { Contato } from './contato';
import { ContatosForm } from './Form';
import { ContatosList } from './List';
import { useContatosLogic } from './useContatosLogic';

const Contatos: FC = () => {

  const { addContato, contato, contatosList, removeContato } = useContatosLogic()

 const handleForSubmit = (contato: Contato) => {
      addContato(contato)
 }

  return (
        <>
            <ContatosForm submeterFormulario={handleForSubmit} 
                          contato={contato} />
            <ContatosList list={contatosList} onDelete={removeContato} />
        </>
  );

}

export default Contatos;
