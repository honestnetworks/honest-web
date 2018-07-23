import React, {Component} from 'react';
import Layout from 'hoc/layout';
import HonestContainer from 'hoc/HonestContainer';

class Contact extends Component {
    render() {
        return (
            <Layout>
            <div style={{marginTop:'20px', height: '70vh'}}>
                <HonestContainer>
                    Contacts Component
                </HonestContainer>
            </div>
            </Layout>

        );
    }
}

export default Contact;

