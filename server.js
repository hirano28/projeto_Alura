import app from './src/app.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`rodando na porta ${PORT}`);
    return `rodando na porta ${PORT}`;
})