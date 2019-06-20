
import React, { Component } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';





const URL = 'https://my-json-server.typicode.com/codificar/oficina/proposals'

export default class Api extends Component {

    constructor(props, context) {
        super(props);



        this.state = { listaItens: [] }
       

        this.refresh()

    }
  

    refresh(seller = '') {
        const search = seller ? `&Nome__regex=/${seller}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(response => { this.setState({ listaItens: response.data }); })
            .catch(() => { console.log('Erro ao recuperar os dados'); });
    }


    render() {
        const estilo= {
            display:'block'
        }//quermalcase par o -
    
        return (

            <div>

                <div>
                    <table>

                        <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">Valor</th>
                            <th scope="col">Nome do Vendedo</th>
                        </tr>
                        <tbody>

                        {this.state.listaItens.map(function (item) {
                            return (
                                <tr key={item.id}>
                                    <td >{item.customer}</td>
                                    <td>{item.seller}</td>
                                    <td>{item.value}</td>
                                    <Button  >Detalhes</Button>
                                    <td style={estilo}>{item.description}</td>
                                   


                                </tr>
                            )
                        }
                        )}
                        </tbody>

                    </table>
                </div>

            </div>
        )
    }


}