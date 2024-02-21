import { fireEvent, render, screen } from "@testing-library/react"
import App from "../../App"

describe('Teste para inserir duas mensagens', () =>{
    test('Inserir a primeira mensagem', () => {
        render(<App />)
        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {
                value: 'Legal sua miniatura'
            }
        })
        fireEvent.click(screen.getByTestId('btn-enviar'))
        expect(screen.getByText('Legal sua miniatura')).toBeInTheDocument() // Correção aqui
    })
    
    test('Inserir a segunda mensagem', () => {
        render(<App />)
        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {
                value: 'Legal seu Batmóvel'
            }
        })
        fireEvent.click(screen.getByTestId('btn-enviar'))
        expect(screen.getByText('Legal seu Batmóvel')).toBeInTheDocument() // Correção aqui
    })
})
