<script setup>
import { ref } from 'vue'

const estado = ref('')

</script>


<template>
    <div class="banner">
        <div class="inner-text">
            <h1>BUSCAR ÍMOVEIS</h1>
        </div>
    </div>
    <div class="principal">
        <div class="form">
            <h2>BUSCA AVANÇADA</h2>
            <label for="estado"></label>
            <select class="caixinha" v-on:keypress="ok = false" v-model="estado">
                <option value="Alugar">Alugar</option>
                <option value="Comprar">Comprar</option>
            </select>
            <p>Tipo de imóvel</p>
            <select class="caixinha" v-on:keypress="ok = false" v-model="estado">
                <option value="Casa">Casa</option>
                <option value="Apartamento">Apê</option>
                <option value="Terreno">Terreno</option>
            </select>
            <p>Cidades</p>
            <select class="caixinha" v-on:keypress="ok = false" v-model="estado">
                <option value="Joinville">Joinville</option>
                <option value="Araquari">Araquari</option>
            </select>
            <p>Bairros</p>
            <select class="caixinha" v-on:keypress="ok = false" v-model="estado">
                <option value="Joinville">Itinga</option>
                <option value="Araquari">Araquari</option>
            </select>
            <div class="lado">
                <p>Quartos</p>
                <select class="form-quarto" v-on:keypress="ok = false" v-model="estado">
                    <option value="um">01</option>
                    <option value="dois">02</option>
                    <option value="mais">mais</option>
                </select>
                <div class="suites">
                    <p>Suítes</p>

                </div>
                <select class="form-suite" v-on:keypress="ok = false" v-model="estado">
                    <option value="um">01</option>
                    <option value="dois">02</option>
                    <option value="mais">mais</option>
                </select>
                <p>Banheiros</p>
                <select class="form-banheiro" v-on:keypress="ok = false" v-model="estado">
                    <option value="um">01</option>
                    <option value="dois">02</option>
                    <option value="mais">mais</option>
                </select>

                <div class="garagem">
                    <p>Garagem</p>
                </div>
                <select class="form-garagem" v-on:keypress="ok = false" v-model="estado">
                    <option value="um">01</option>
                    <option value="dois">02</option>
                    <option value="mais">mais</option>
                </select>
            </div>
        </div>


        <div class="containerimg">
            <div class="oi" @click="$router.push({ name: 'saibamais01' })">
                <img class="img1" src="@/assets/imgs/casa1.jpg" alt="">
            </div>
            <div class="oi2" @click="$router.push({ name: 'saibamais02' })">
                <img class="img2" src="@/assets/imgs/casa2.jpg" alt="">
            </div>
            <div class="oi3" @click="$router.push({ name: 'saibamais03' })">
                <img class="img3" src="@/assets/imgs/casa3.jpg" alt="">
            </div>
            <div class="oi4" @click="$router.push({ name: 'saibamais04' })">
                <img class="img4" src="@/assets/imgs/casa4.jpg" alt="">
            </div>

        </div>




        <div class="containerinfo">
            <div class="info" @click="$router.push({ name: 'saibamais01' })">
                <div class="bairroF">Floresta | Joinville</div>
                <div class="rs">R$390.000,00</div>

                <div>
                    <img class="m2" src="@/assets/imgs/m2.png" alt=""> 50,90m²
                </div>
                <div>
                    <img class="quarto" src="@/assets/imgs/quarto.png" alt="">
                    <div class="qrt">
                        2 Quartos
                    </div>
                </div>
                <div>
                    <img class="banheiro" src="@/assets/imgs/banheiro.png" alt="">
                    1 Banheiro
                </div>
                <!-- <div class="botao1">
                    <button class="botSaibaMais" @click="$router.push({ name: 'saibamais01' })">Saiba Mais</button>
                </div> -->
            </div>


            <div class="info1" @click="$router.push({ name: 'saibamais02' })">
                <div class="bairroB">Bucarein | Joinville</div>
                <div class="rs">R$340.000,00</div>
                <div>
                    <img class="m2" src="@/assets/imgs/m2.png" alt="">
                    68,88m²
                </div>
                <div>
                    <img class="quarto" src="@/assets/imgs/quarto.png" alt="">
                    <div class="qrt">
                        2 Quartos
                    </div>

                </div>
                <div>
                    <img class="banheiro" src="@/assets/imgs/banheiro.png" alt="">
                    1 Banheiro
                </div>
                <!-- <div class="botao1">
                    <button class="botSaibaMais1" @click="$router.push({ name: 'saibamais02' })">Saiba Mais</button>
                </div> -->
            </div>
            <div class="info2" @click="$router.push({ name: 'saibamais03' })">
                <div class="bairro1">América | Joinville</div>
                <div class="rs">R$320.000,00</div>
                <div>
                    <img class="m2" src="@/assets/imgs/m2.png" alt="">
                    76,00m²
                </div>
                <div>
                    <img class="quarto" src="@/assets/imgs/quarto.png" alt="">
                    <div class="qrt">
                        2 Quartos
                    </div>

                </div>
                <div>
                    <img class="banheiro" src="@/assets/imgs/banheiro.png" alt="">
                    1 Banheiro
                </div>
                <!-- <div class="botao1">
                    <button class="botSaibaMais2" @click="$router.push({ name: 'saibamais03' })">Saiba Mais</button>
                </div> -->
            </div>
    <div class="info3" @click="$router.push({ name: 'saibamais04' })">
        <div class="bairro">Glória | Joinville</div>
        <div class="rs1">R$320.000,00</div>
        <div>
            <img class="m21" src="@/assets/imgs/m2.png" alt="">
            76,00m²
        </div>
        <div>
            <img class="quarto1" src="@/assets/imgs/quarto.png" alt="">
            <div class="qrt1">
                2 Quartos
            </div>

        </div>
        <div>
            <img class="banheiro1" src="@/assets/imgs/banheiro.png" alt="">
            1 Banheiro
        </div>
    </div>
    </div>
        <!-- <div class="botao1">
            <button class="botSaibaMais3" @click="$router.push({ name: 'saibamais04' })">Saiba Mais </button>
        </div> -->
    </div>
</template>


<style scoped>
.caixinha {
    border-radius: 5px;
    background-color: #ffffff;
    border-color: #ffffff;
    width: 260px;
}

.form {
    border-radius: 2%;
    margin-left: 200px;
    margin-top: 50px;
    padding: 20px;
    height: 20%;
    width: 20%;
    background-color: #f28a31;
}

.garagem {
    margin-top: -26%;
    margin-left: 62%;
}

.suites {
    margin-top: -24%;
    margin-left: 61%;
}

.form-quarto {
    width: 106px;
    height: 23px;
    border-radius: 5px;
    background-color: aliceblue;
    border-color: rgb(255, 255, 255);
}

.form-suite {
    width: 100px;
    height: 23px;
    border-radius: 5px;
    background-color: aliceblue;
    border-color: rgb(255, 255, 255);
    padding-left: 30%;
    margin-left: 60%;
}

.form-banheiro {
    width: 100px;
    height: 22px;
    border-radius: 5px;
    background-color: aliceblue;
    border-color: rgb(255, 255, 255);
    padding-left: 23%;
    margin-top: -5%;
}

.form-garagem {
    width: 100px;
    height: 23px;
    border-radius: 5px;
    background-color: aliceblue;
    border-color: rgb(255, 255, 255);
    padding-left: 23%;
    margin-left: 60%;
    margin-top: 2%;

}

.botSaibaMais {
    margin-top: 8%;
    background-color: #f28a31;
    color: white;
    padding: 20px;
    border: 2px solid #ffffff;
    transition: background-color 1s ease, color 1s ease;
    border-radius: 10%;
    height: 40px;
    width: 33%;
    padding-bottom: -20%;
    padding-top: 2%;
}

.botSaibaMais1 {
    margin-top: 8%;
    background-color: #f28a31;
    color: white;
    padding: 20px;
    border: 2px solid #ffffff;
    transition: background-color 1s ease, color 1s ease;
    border-radius: 10%;
    height: 40px;
    width: 33%;
    padding-bottom: -20%;
    padding-top: 2%;
}

.botSaibaMais2 {
    margin-top: 8%;
    background-color: #f28a31;
    color: white;
    padding: 20px;
    border: 2px solid #ffffff;
    transition: background-color 1s ease, color 1s ease;
    border-radius: 10%;
    height: 40px;
    width: 33%;
    padding-bottom: -20%;
    padding-top: 2%;
}

.botSaibaMais3 {
    margin-top: 8%;
    background-color: #f28a31;
    color: white;
    padding: 20px;
    border: 2px solid #ffffff;
    transition: background-color 1s ease, color 1s ease;
    border-radius: 10%;
    height: 40px;
    width: 33%;
    padding-bottom: -20%;
    padding-top: 2%;
    margin-left: -43%;
}

.botSaibaMais:hover {
    font-family: "Open Sans" sans-serif;
    background-color: #ffbe84;
    color: black;
}

.qrt {
    margin-left: 50px;
    margin-top: -15%;

}

.m2 {
    color: #f28a31;
    margin-right: 10px;
    text-align: center;
    font-size: 10px;
    font-weight: 40;
    width: 40px;
    height: 40px;
    margin-left: 60%;
}

.quarto {
    color: #f28a31;
    margin-right: 10px;
    margin-top: -17%;
    text-align: center;
    font-size: 10px;
    font-weight: 40;
    width: 40px;
    height: 40px;

}

.banheiro {
    color: #f28a31;
    margin-right: 10px;
    text-align: center;
    font-size: 10px;
    font-weight: 40;
    width: 40px;
    height: 40px;
}

.qrt1 {
    margin-left: -30%;
    margin-top: -15%;

}

.m21 {
    color: #f28a31;
    margin-right: 10px;
    text-align: center;
    font-size: 10px;
    font-weight: 40;
    width: 40px;
    height: 40px;
    margin-left: 22%;
}

.quarto1 {
    color: #f28a31;
    margin-right: 10px;
    margin-top: -17%;
    text-align: center;
    font-size: 10px;
    font-weight: 40;
    width: 40px;
    height: 40px;
    margin-left: -43%;

}

.banheiro1 {
    color: #f28a31;
    margin-right: 10px;
    text-align: center;
    font-size: 10px;
    font-weight: 40;
    width: 40px;
    height: 40px;
    margin-left: -43%;
}


.containerinfo {
    display: flex;
    flex-direction: column;
    margin-left: 2%;
    margin-top: 2%;
}

.bairro1 {
    font-size: 40px;
    font-weight: bold;
    color: #f28a31;
    margin-top: -10%;

}
.bairroF {
    font-size: 40px;
    font-weight: bold;
    color: #f28a31;
    margin-top: -10%;
}

.bairroB:hover {
    color: black;
    cursor: pointer;
}

.bairroB {
    font-size: 40px;
    font-weight: bold;
    color: #f28a31;
    margin-top: -10%;
}

.bairroF:hover {
    color: black;
    cursor: pointer;
}
.bairro1:hover {
    color: black;
    cursor: pointer;
}

.bairro {
    margin-top: 12%;
    font-size: 40px;
    font-weight: bold;
    color: #f28a31;
    margin-left: -43%;
}
.bairro:hover {
    color: black;
    cursor: pointer;
}

.info {
    margin-top: 18%;
    margin-left: 10%;
    font-size: medium;
    width: 400px;

}

.info1 {
    margin-top: 62%;
    margin-left: 10%;
    font-size: large;
    width: 400px;
}

.info2 {
    margin-top: 60%;
    margin-left: 10%;
    font-size: large;
    width: 400px;
}

.info3 {
    margin-top: 35%;
    margin-left: 52%;
    font-size: large;
    width: 400px;
}

.img1 {
    height: 300px;
    width: 300px;
    margin-bottom: 20%;
    margin-left: 70px;
    margin-top: 50px;    
}

.img1:hover {
    background: rgba(0, 0, 0, 10);
    /* transition: background 0.5s ease; */
    cursor: pointer;
}
.img2 {
    height: 300px;
    width: 300px;
    margin-bottom: 20%;
    margin-left: 70px;
}

.img3 {
    height: 300px;
    width: 300px;
    margin-bottom: 20%;
    margin-left: 70px;
}

.img4 {
    height: 300px;
    width: 300px;
    margin-bottom: 80%;
    margin-left: 70px;
}

.rs {
    margin-top: 2px;
    margin-bottom: 8px;
}

.rs1 {
    margin-top: 2px;
    margin-bottom: 8px;
    margin-left: -43%;
}

.containerimg {
    display: flex;
    flex-direction: column;

}

.principal {
    display: flex;
    flex-direction: row;
    margin-bottom: -13%;
}

p {
    margin-top: 05%;
    color: #ffffff;
    font-weight: bold;
}


input {
    border-radius: 5px;
    padding: 5px 0px;
    background-color: #ffffff;
    border-color: #ffffff;
}


h2 {
    color: white;
    font-size: large;
}

.banner {
    background: url(https://www.rafaelfonsecaimoveis.com.br/assets/img/anuncie/banner-anuncie.png) top left repeat;
    background-repeat: no-repeat;
    background-size: cover;
    background-size: cover;
    height: 280px;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;
    background-color: rgba(36, 42, 53, 0.7);
    /* color: aliceblue; */
    display: flex;
    align-items: center;
    flex-direction: column;
    /* padding: 100px 0 0 0 ; */
}


.inner-text {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: black;
    opacity: 70%;
}


h1 {
    color: white;
}</style>
