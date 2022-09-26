let info = {
    personagem: 'Margarida', 
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };

  console.log('Bem-vinda, ' + info.personagem)

  for (let key in info) {
    console.log(key)   
    };

    for (let key in info) {
        console.log(info[key])   
     };
  
  
     let info1 = {
        personagem: 'Tio Patinhas', 
        origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
        nota: 'O último MacPatinhas',
        recorrente: 'Sim'
      };

      for (let key in info1) {
        if(info[key] !== info1[key]){
            console.log (info[key] + ' e ' + info1[key])
        }else{
        console.log('Ambos recorrentes')   
      }
    };