import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Grid } from '@mui/material';
import ProductCard from '../components/ProductCard';  // Verifica il percorso
import menuData from '../menuData.json';  // Verifica il percorso

function Bevande() {
    const navigate = useNavigate();  // Ottieni la funzione navigate

    return (
        <Container style={{ marginTop: '20px' }}>
            <Button onClick={() => navigate('/')} style={{ marginBottom: '10px' }}>
                Torna alla Home
            </Button>
            <Grid container spacing={4} justifyContent="center">
                {menuData.bevande.map(bevanda => (
                    <Grid item key={bevanda.id} xs={12} sm={6} md={4}>
                        <ProductCard product={bevanda} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Bevande;