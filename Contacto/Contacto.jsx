import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


import './Contacto.css';

export function Contacto() {
    return (
        <>
            <section className='py-5'>
                <div className='container'>
                    <div className='row mt-3'>
                        <div className="col-lg-6 mb-5">
                            <h2 className='mb-4'> Contáctanos </h2>
                            <Form>
                                <FloatingLabel controlId="floatingInput" label="Nombre" className="mb-3">
                                    <Form.Control type="text" placeholder="Nombre" />
                                </FloatingLabel>

                                <FloatingLabel controlId="floatingInput" label="Apellido"className="mb-3">
                                    <Form.Control type="text" placeholder="Apellido" />
                                </FloatingLabel>

                                <FloatingLabel controlId="floatingInput" label="Email"className="mb-3" aria-required>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </FloatingLabel>

                                <FloatingLabel controlId="floatingInput" label="Asunto"className="mb-3">
                                    <Form.Control type="text" placeholder="Asunto" />
                                </FloatingLabel>

                                <FloatingLabel controlId="floatingInput" label="Teléfono"className="mb-3">
                                    <Form.Control type="number" placeholder="Teléfono" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingInput" label="Mensaje"className="mb-3 textarea">
                                    <Form.Control type="text"as="textarea" rows={3} placeholder='Mensaje' />
                                    
                                </FloatingLabel>
                                    <div className='text-center d-grid gap-2'>
                                        <Button variant="primary" type="submit">Enviar Mensaje</Button>
                                    </div>
                            </Form>
                        
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}
