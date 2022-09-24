import React, { FC } from 'react';
import { ContatosForm } from './Form';
import { ContatosList } from './List';

const Contatos: FC = () => {
  return (
        <>
            <ContatosForm />
            <ContatosList />
        </>
  );

}

export default Contatos;
