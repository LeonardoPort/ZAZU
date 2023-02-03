

 function noLoad(){
    if(this.window.innerWidth>600){document.getElementById('serv1').style.visibility='visible';}
 }
 
 function resize () {
    hideArrow();
    var carroselinterior;
    if(this.window.innerWidth<=600){
        $('#collapsenav').collapse('hide')
        carroselinterior='<div id="carouselExampleIndicators1" class="carousel slide" data-ride="carousel">'
                        +'  <div class="carousel-indicators" style="margin-bottom: 0;">'
                        +'    <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>'
                        +'    <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="1" aria-current="true" aria-label="Slide 2"></button>'
                        +'    <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="2" aria-current="true" aria-label="Slide 3"></button>'
                        +'    <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="3" aria-current="true" aria-label="Slide 4"></button>'
                        +'    <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="4" aria-current="true" aria-label="Slide 5"></button>'
                        +'  </div>'
                        +'  <div class="carousel-inner">'
                        +'    <div class="carousel-item active">'
                        +'      <img src="img/exotica.png" class="d-block" alt="burgo">'
                        +'      <p class="nomeCliente">A Exotica</p>'
                        +'      <p>A Exótica é uma floricultura de Campinas-SP, presente no mercado de flores desde 1978.</p>'
                        +'    </div>'
                        +'    <div class="carousel-item">'
                        +'      <img src="img/tapa.png" class="d-block" alt="burgo">'
                        +'      <p class="nomeCliente">Aquele tapa</p>'
                        +'      <p>A plataforma do Aquele Tapa é um guia de reformas ideal para quem acabou de comprar seu apartamento na planta.</p>'
                        +'    </div>'
                        +'    <div class="carousel-item">'
                        +'      <img src="img/fugace.png" class="d-block" alt="burgo">'
                        +'      <p class="nomeCliente">Fugace</p>'
                        +'      <p>Instagram de dicas de viagens para quem não tem tempo a perder com planejamentos.</p>'
                        +'    </div>'

                        +'    <div class="carousel-item">'
                        +'       <img src="img/volke.png" class="d-block" alt="burgo">'
                        +'       <p class="nomeCliente">Volke</p>'
                        +'       <p>A Volke é uma empresa de tecnologia em nuvem fundada em Campinas-SP, em 2019.</p>'
                        +'    </div>'
                        +'    <div class="carousel-item">'
                        +'       <img src="img/carloscamargo.png" class="d-block" alt="burgo">'
                        +'       <p class="nomeCliente">Carlos Camargo</p>'
                        +'       <p >Empresa de móveis sob medida referência no mercado de São Paulo desde 1958.</p>'
                        +'    </div>'
                        +'  </div>'
                        +'</div>'
        document.getElementById("blog").classList.add('flex-column');
        document.getElementById("blog").classList.add('justify-content-center');
        document.getElementById("blog").classList.remove('flex-row');
        document.getElementById("blog").classList.remove('justify-content-between');
        document.getElementById("MidiaMarketing").classList.add('flex-column');
        document.getElementById("MidiaMarketing").classList.add('justify-content-center');
        document.getElementById("MidiaMarketing").classList.remove('flex-row');
        document.getElementById("MidiaMarketing").classList.remove('justify-content-between');
    }else{
        $('#collapsenav').collapse('show')
        carroselinterior='<div class="p-2 flex-grow-1">'
                        +'  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">'
                        +'    <div class="carousel-indicators" style="margin-bottom: 0;">'
                        +'      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>'
                        +'      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>'
                        +'  </div>'
                        +'    <div class="carousel-inner">'
                        +'      <div class="carousel-item active">'
                        +'        <div class="d-flex">'
                        +'          <div class="p-2 d-flex flex-column justify-content-around cardPai">'
                        +'            <div class="cardL d-flex align-items-start"><img src="img/exotica.png" class="d-block" alt="burgo"></div>'
                        +'            <div class="cardN d-flex"><p class="nomeCliente">A Exotica</p></div>'
                        +'            <div class="cardD d-flex"><p>A Exótica é uma floricultura de Campinas-SP, presente no mercado de flores desde 1978.</p></div>'
                        +'          </div>'
                        +'          <div class="p-2 d-flex flex-column justify-content-around cardPai">'
                        +'            <div class="cardL d-flex align-items-start"><img src="img/tapa.png" class="d-block" alt="burgo"></div>'
                        +'            <div class="cardN d-flex"><p class="nomeCliente">Aquele tapa</p></div>'
                        +'            <div class="cardD d-flex"><p >A plataforma do Aquele Tapa é um guia de reformas ideal para quem acabou de comprar seu apartamento na planta.</p></div>'
                        +'          </div>'
                        +'          <div class="p-2 d-flex flex-column justify-content-around cardPai">'
                        +'            <div class="cardL d-flex align-items-start"><img src="img/fugace.png" class="d-block" alt="burgo"></div>'
                        +'            <div class="cardN d-flex"><p class="nomeCliente">Fugace</p></div>'
                        +'            <div class="cardD d-flex"><p>Instagram de dicas de viagens para quem não tem tempo a perder com planejamentos.</p></div>'
                        +'          </div>'
                        +'        </div>'
                        +'      </div>'
                        +'      <div class="carousel-item">'
                        +'        <div class="d-flex">'
                        +'          <div class="p-2 d-flex flex-column justify-content-around cardPai">'
                        +'            <div class="cardL d-flex align-items-start"><img src="img/volke.png" class="d-block" alt="burgo"></div>'
                        +'            <div class="cardN d-flex"><p class="nomeCliente">Volke</p></div>'
                        +'            <div class="cardD d-flex"><p>A Volke é uma empresa de tecnologia em nuvem fundada em Campinas-SP, em 2019.</p></div>'
                        +'          </div>'
                        +'          <div class="p-2 d-flex flex-column justify-content-around cardPai">'
                        +'            <div class="cardL d-flex align-items-start"><img src="img/carloscamargo.png" class="d-block" alt="burgo"></div>'
                        +'            <div class="cardN d-flex"><p class="nomeCliente">Carlos Camargo</p></div>'
                        +'            <div class="cardD d-flex"><p >Empresa de móveis sob medida referência no mercado de São Paulo desde 1958.</p></div>'
                        +'          </div>'
                        +'        </div>'
                        +'      </div>'
                        +'    </div>'
                        +'  </div>'
                        +'</div>'
                        +'<div class="p-2 align-self-end">'
                        +'  <button type="button" class="btn btn-bd-primary nextCarrosel" onclick="nextSlide()"><img src="img/arrow.png" class="d-block" alt="..." ></button>'
                        +'</div>'
                        document.getElementById("blog").classList.remove('flex-column');
                        document.getElementById("blog").classList.remove('justify-content-center');
                        document.getElementById("blog").classList.add('flex-row');
                        document.getElementById("blog").classList.add('justify-content-between');
                        document.getElementById("MidiaMarketing").classList.remove('flex-column');
                        document.getElementById("MidiaMarketing").classList.remove('justify-content-center');
                        document.getElementById("MidiaMarketing").classList.add('flex-row');
                        document.getElementById("MidiaMarketing").classList.add('justify-content-between');
    }
    $('#clientesFilho').html(carroselinterior);
}
window.addEventListener("resize", (event) => resize());

function hideArrow(){
    var temp='';
    for(var x=1;x<=9;x++){
        temp="serv"+x;
        document.getElementById(temp).style.visibility='hidden';
    }
}

function changeDivContent(tipo) { 
    hideArrow();
    if(tipo=='redesocial'){
        document.getElementById("servico").innerHTML = "Redes Sociais";
        document.getElementById("servicoimg").src = "img/placeholder.png";
        document.getElementById("servicodescricao").innerHTML = "As redes sociais são a nova vitrine do mundo digital.<br>Engaje seu público e mantenha-se ativo com a melhor estratégia de marketing para as redes sociais.";
        if(this.window.innerWidth>600){document.getElementById('serv1').style.visibility='visible';}
    }if(tipo=='apreinst'){
        document.getElementById("servico").innerHTML = "Apresentação Institucional";
        document.getElementById("servicoimg").src = "img/apresentacaoinstitucional.png";
        document.getElementById("servicodescricao").innerHTML = "Transforme suas apresentações institucionais em um material profissional que irá transmitir ainda mais credibilidade ao seu cliente durante aquela reunião importante.";
        if(this.window.innerWidth>600){document.getElementById('serv2').style.visibility='visible';}
    }if(tipo=='identvisu'){
        document.getElementById("servico").innerHTML = "Identidade Visual";
        document.getElementById("servicoimg").src = "img/identidadevisual.png";
        document.getElementById("servicodescricao").innerHTML = "A identidade visual de uma marca é a soma do logotipo, paleta de cores, tipografia e elementos gráficos. Todos esses itens juntos, de forma harmônica, farão seu consumidor lembrar da sua marca quando a vir em qualquer mídia e canal.";
        if(this.window.innerWidth>600){document.getElementById('serv3').style.visibility='visible';}
    }if(tipo=='papelaria'){
        document.getElementById("servico").innerHTML = "Papelaria";
        document.getElementById("servicoimg").src = "img/papelaria.png";
        document.getElementById("servicodescricao").innerHTML = "A vida continua no mundo offline, e comunicar-se através de materiais impressos continua sendo essencial para toda empresa. Com uma papelaria personalizada, entregue cartões de visita para clientes em potencial, flyers promocionais, panfletos com cardápios, e muito mais. As possibilidades são infinitas!";
        if(this.window.innerWidth>600){document.getElementById('serv4').style.visibility='visible';}
    }if(tipo=='site'){
        document.getElementById("servico").innerHTML = "Site";
        document.getElementById("servicoimg").src = "img/site.png";
        document.getElementById("servicodescricao").innerHTML = "Ter um site, além de construir credibilidade e profissionalismo, faz com que sua empresa esteja apta a disputar com seus concorrentes por palavras-chave nos principais buscadores da internet.";
        if(this.window.innerWidth>600){document.getElementById('serv5').style.visibility='visible';}
    }if(tipo=='blog'){
        document.getElementById("servico").innerHTML = "Blog";
        document.getElementById("servicoimg").src = "img/blog.png";
        document.getElementById("servicodescricao").innerHTML = "Um blog com conteúdo relevante e estratégico tem o poder de fazer seu site subir nas buscas orgânicas da internet através da otimização de palavras para o SEO.";
        if(this.window.innerWidth>600){document.getElementById('serv6').style.visibility='visible';}
    }if(tipo=='emailmark'){
        document.getElementById("servico").innerHTML = "Email Marketing";
        document.getElementById("servicoimg").src = "img/emailmarketing.png";
        document.getElementById("servicodescricao").innerHTML = "O e-mail marketing continua sendo uma ferramenta importante para toda empresa que deseja engajar seus leads e prospects. Com a estratégia certa, engaje sua base de e-mails de acordo com o funil de vendas.";
        if(this.window.innerWidth>600){document.getElementById('serv7').style.visibility='visible';}
    }if(tipo=='asseimpre'){
        document.getElementById("servico").innerHTML = "Assessoria de imprensa";
        document.getElementById("servicoimg").src = "img/assessoriadeimprensa.png";
        document.getElementById("servicodescricao").innerHTML = "Destaque a sua empresa e seus projetos nos veículos de comunicação mais renomados do mercado.";
        if(this.window.innerWidth>600){document.getElementById('serv8').style.visibility='visible';}
    }if(tipo=='googleads'){
        document.getElementById("servico").innerHTML = "Google ADS";
        document.getElementById("servicoimg").src = "img/googleads.png";
        document.getElementById("servicodescricao").innerHTML = "Anunciar seu produto ou serviço no Google é uma das estratégias mais importantes do marketing digital. Através da compra de palavras-chave, apareça na primeira página das buscas do seu cliente.";
        if(this.window.innerWidth>600){document.getElementById('serv9').style.visibility='visible';}
    }if(this.window.innerWidth<=600){
        $('#collapsenav').collapse('hide')
    }
};

function nextSlide(){
    $('#carouselExampleIndicators').carousel('next')
}

function openBlogPost(assist){
    window.open("blog.html","_self")
}

