// WHY US

export const whyUs = [
    {
        id:1,
        title:`Luxury facilities`,
        sharx:`The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.`,
    },
    {
        id:2,
        title:`Affordable Price`,
        sharx:`You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.`,
    },
    {
        id:3,
        title:`Many Choices`,
        sharx:`We provide many unique work space choices so that you can choose the workspace to your liking.`,
    }
];
// tabs

import c1 from './img/chair1.jpg'
import c2 from './img/chair2.jpg'
import c3 from './img/chair3.jpg'
import c4 from './img/chair4.jpg'

export const  tabs = [
    {
      id:1,
      label:`Chair`,
      img:c1,
      title:`Sakarias Armchair`,
      narxi:392,

    },
    {
      id:2,
      label:`Chair`,
      img:c2,
      title:`Baltsar Chair`,
      narxi:299,

    },
    {
      id:3,
      label:`Chair`,
      img:c3,
      title:`Anjay Chair`,
      narxi:519,

    },
    {
      id:4,
      label:`Chair`,
      img:c4,
      title:`Nyantuy Chair`,
      narxi:921,

    },


    {
      id:5,
      label:`Beds`,
      img:c3,
      title:`Baltsar Beds`,
      narxi:299,

    },
    {
      id:6,
      label:`Beds`,
      img:c1,
      title:`Anjay Beds`,
      narxi:509,

    },
    {
      id:7,
      label:`Beds`,
      img:c4,
      title:`Nyantuy Beds`,
      narxi:911,

    },
    {
      id:8,
      label:`safa`,
      img:c1,
      title:`Nyantuy Beds`,
      narxi:934,

    },
    {
      id:9,
      label:`safa`,
      img:c2,
      title:`Nyantuy safa`,
      narxi:511,

    },
    {
      id:10,
      label:`safa`,
      img:c3,
      title:`Nyantuy safa`,
      narxi:901,

    },

  ];

  function setLabelToArray(arr) {
    let labels = new Set();
    arr.forEach((item) => {
      let label = item.label;
      labels.add(label);
    });
    let labelArr = Array.from(labels);
    return labelArr;
  }
  
  export const labels = setLabelToArray(tabs);