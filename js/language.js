function changeLang(lang) {

    const pt = document.getElementById("PT")
    const en = document.getElementById("EN")
    const text = document.getElementsByClassName("text")
    const textTitle = document.getElementsByClassName("text-title")
    const textWhite = document.getElementsByClassName("text-white")
    const copy = document.getElementById("copy")

    switch (lang) {
        case "PT-BR":

            pt.innerText = "português"
            en.innerText = "inglês"
            textWhite[0].innerHTML = "IFMS conectado para o futuro"
            textWhite[1].innerHTML = "O IFMS é uma instituição muito ligada à tecnologia e tem experiência com ensino por meio de plataformas digitais de ensino, mas não oferece uma forma de seus alunos terem essas plataformas de ensino fora da instituição a não ser por meio de seus próprios dispositivos. No entanto, agora o IFMS disponibiliza tablets didáticos para todos os alunos matriculados em cursos técnicos integrados com as ferramentas necessárias para melhorar o ensino"
            textTitle[0].innerHTML = `Por que usar tablets na instituição?`
            textTitle[1].innerHTML = `Como os tablets podem ajudar na educação técnica`
            textTitle[2].innerHTML = `Vantagens do ensino com tablets`
            textTitle[3].innerHTML = `Alunos que fizeram o anúncio online`
            text[0].innerHTML = `É inegável que a atual geração de alunos já nasceu conectada e o uso de tablets
            dentro
            educação vem desde o nascimento. O uso da tecnologia em sala de aula torna-se, portanto, uma necessidade
            por
            escolas que não querem ficar para trás.

            Não estamos falando de atender uma demanda temporária, mas de adotar uma inovação que está aqui
            para
            fique
            e que pode melhorar muito a dinâmica de ensino e aprendizagem, afinal o uso do tablet
            dentro
            a educação escolar não é mais uma tendência, mas uma realidade.

            Se, no início, os computadores foram os primeiros facilitadores, agora é a vez dos tablets nas escolas.
            Comprado
            dentro
            grande número pelo Ministério da Educação (MEC) para uso em escolas públicas e uma tendência confirmada
            a
            sistema de ensino privado, esses dispositivos oferecem inúmeras vantagens.`
            text[1].innerHTML = `o uso de tablets em celulares é por meio do qual é possível utilizar o acesso dos alunos técnicos
            para o ensino usar um computador útil e útil para os alunos do curso técnico. Ferramentas incorporadas de
            a maioria das ferramentas projetadas como representadas por ferramentas projetadas para ferramentas de desenvolvimento de ferramentas projetadas para serem usadas
            em ferramentas internas para desenvolvimento de ferramentas.`
            text[2].innerHTML = `A multifuncionalidade dos tablets proporciona e incentiva diferentes formas de aprender a usar
            tecnologia no ensino. Devido à sua capacidade de traduzir o conteúdo curricular em diferentes formatos,
            são ferramentas capazes de ajudar os professores a lidar com a diversidade que existe entre os alunos.
            
            Imagine o mesmo conteúdo disponível em áudio, vídeos e até mesmo para leitura. Isso é exatamente o que o
            o uso do tablet na educação escolar proporciona aprendizado de forma didática e pedagógica. Isso ajuda
            o professor enfrentar e lidar com as particularidades de assimilação do conteúdo de cada aluno.
            A tecnologia em sala de aula é uma oportunidade para acompanhar de perto cada aluno, desde o jardim de infância até o
            ensino médio.
      
            Outro benefício é que, comparado ao valor gasto na compra de material escolar tradicional,
            materiais, a aquisição desses aparelhos para uso em sala de aula e um pacote de internet podem ser
            muito mais vantajoso.

            Além disso, o uso do tablet na educação escolar também pode ser um diferencial em termos de
            mobilidade e até na saúde dos alunos, pois reduz ou até elimina o problema do peso
            em mochilas.

            Você gostou do artigo? Você percebeu a importância do uso do tablet na educação escolar?`
            copy.innerText = "COPYRIGHT © 2022 Wilker Sebastian Afonso Pereira TODOS OS DIREITOS RESERVADOS"

            break;

        case "EN-US":

            pt.innerText = "portuguese"
            en.innerText = "english"
            textWhite[0].innerHTML = "IFMS connected for the future"
            textWhite[1].innerHTML = `IFMS is an institution very connected to technology and has experience with teaching through digital
            teaching platforms, but does not provide a way for its students to have these teaching platforms outside
            the institution other than through their own devices.However, now IFMS makes teaching tablets available
            to all students enrolled in technical courses integrated with the necessary tools to improve teaching`
            textTitle[0].innerHTML = `Why to use tablets in the institution?`
            textTitle[1].innerHTML = `How tablets can help in technical education`
            textTitle[2].innerHTML = `Advantages of teaching with tablets`
            textTitle[3].innerHTML = `Students who did online adverts`
            text[0].innerHTML = `It is undeniable that the current generation of students was born connected and the use of tablets
            in
            education comes from birth. The use of technology in the classroom becomes, therefore, a necessity
            for
            schools that do not want to be left behind.

            We are not talking about meeting a temporary demand, but about adopting an innovation that is here
            to
            stay
            and that can greatly improve the dynamics of teaching and learning, after all the use of the tablet
            in
            school education is no longer a trend but a reality.

            If, at first, computers were the first facilitators, now it is the turn of tablets in schools.
            Purchased
            in
            large numbers by the Ministry of Education (MEC) for use in public schools and a confirmed trend in
            the
            private school system, these devices offer numerous advantages.`
            text[1].innerHTML = `the use of tablets on mobile phones is through which it is possible to use technical students access
            to teaching use a useful and useful computer for students of the technical course. Built-in tools of
            most tools designed as represented by tools designed for tool development tools designed to be used
            in built-in tools for tool development.`
            text[2].innerHTML = `The multifunctionality of tablets provides and encourages different ways of learning to use
            technology in teaching. Due to their ability to translate curriculum content into different formats,
            they are tools capable of helping teachers to deal with the diversity that exists among students.
            <br>
            Imagine the same content available in audio, videos and even for reading. This is exactly what the
            use of the tablet in school education provides learning in a didactic and pedagogical way. It helps
            the teacher to face and deal with the particularities of content assimilation of each student.
            Technology in the classroom is an opportunity to closely monitor each student, from kindergarten to
            high school.
            <br><br>
            Another benefit is that, compared to the amount spent on the purchase of traditional school
            supplies, the acquisition of these devices for use in the classroom and an internet package can be
            much more advantageous.

            In addition, the use of the tablet in school education can also be a differential in terms of
            mobility and even in the health of students, as it reduces or even eliminates the problem of weight
            in backpacks.

            Did you like the article? Did you realize the importance of using the tablet in school education?`
            copy.innerText = "COPYRIGHT © 2022 Wilker Sebastian Afonso Pereira ALL RIGHTS RESERVED"

            break;
    }

}