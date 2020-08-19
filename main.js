const date = new Date();
for (let i = 1; i <= 1000; i++) {
  const Ye = date.getFullYear()
  const Mo = date.getMonth()
  const Da = date.getDate()
  {
    // const div = document.createElement('div');
    // div.textContent = `${Ye}年${Mo + 1}月${Da}日`;

    // const span1 = document.querySelector('.span1');
    // const div2 = document.querySelector('div');
    // span1.insertBefore(div, div2);
    // div.textContent = `${Da}日`;
    {
      const Cdiv = document.createElement('div');
      Cdiv.textContent = `${Da}日`;

      const DaArea = document.querySelector('.DaArea');
      const div = document.querySelector('.DaArea > div');
      DaArea.insertBefore(Cdiv, div);
    }
    {
      const Cdiv = document.createElement('div');
      if (`${Da}`==1) {
        Cdiv.textContent = `${Mo + 1}月`;
      } else {
        Cdiv.textContent = '　';
      }

      const MoArea = document.querySelector('.MoArea');
      const div = document.querySelector('.MoArea > div');
      MoArea.insertBefore(Cdiv, div);
    }
    {
      const Cdiv = document.createElement('div');
      if ((`${Mo}`==0&&(`${Da}`==1))) {
        Cdiv.textContent = `${Ye}年`;
      } else {
        Cdiv.textContent = '　';
      }

      const YeArea = document.querySelector('.YeArea');
      const div = document.querySelector('.YeArea > div');
      YeArea.insertBefore(Cdiv, div);
    }
  }

  date.setDate(Da - 1);
}
