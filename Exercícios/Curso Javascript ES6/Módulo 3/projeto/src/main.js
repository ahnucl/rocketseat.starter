// 1
// Funão delay aciona o .then após 1s
/* const delay = () => new Promise(resolve => setTimeout(resolve,1000));

// async function umPorSegundo(){ // da no mesmo que a linha abaixo
const umPorSegundo = async () => {
    await delay();
    console.log(`1s`);
    await delay();
    console.log(`2s`);
    await delay();
    console.log(`3s`);
}

umPorSegundo(); */

// 2
// import axios from 'axios';
// async function getUserFromGithub(user) {
//     console.log('Função com async await');
//     try {
//         const response = await axios.get(`https://api.github.com/users/${user}`);
//         console.log(response.data);
//     }
//     catch(err) {
//         console.log('Usuário não existe');
//     }
// }

// function getUserFromGithub2(user) {
//     console.log('Função com código original');
//     axios.get(`https://api.github.com/users/${user}`)
//         .then(response => {
//             console.log(response.data);
//         })
//         .catch(err => {
//             console.log('Usuário não existe');
//         })
// }
// getUserFromGithub('diego3g');
// getUserFromGithub('diego3g124123');

// 3
// import axios from 'axios';
// class Github {
//     static async getRepositories(repo) {
//         try {
//             const response = await axios.get(`https://api.github.com/repos/${repo}`);
//             console.log(response.data);
//         } catch (error) {
//             console.log('Repositório não existe');
//         }
        
//     }
// }
// Github.getRepositories('ahnucl/bolApp');
// Github.getRepositories('rocketseat/dslkvmskv');

// 4
import axios from 'axios';
const buscaUsuario = async usuario => {
    try {
        const response = await axios.get(`https://api.github.com/users/${usuario}`);
        console.log(response.data);
    } catch (error) {
        console.log('Usuário não existe');
    }
}
buscaUsuario('diego3g');