(function ($) {
    $(document).ready(function () {
        var app = new Vue({
            el: '#constructor',
            data: {
                result: {
                    picture: null,
                    border: null,
                    marks: []
                },
                description: {
                    title: '',
                    name: '',
                    date: ''
                },
                currentFont: 0,
                fonts: [
                    {
                        id: 'ariston',
                        name: 'Ariston',
                        index: 1
                    },
                    {
                        id: 'davinci',
                        name: 'DaVinci',
                        index: 2
                    },
                    {
                        id: 'brody',
                        name: 'Brody',
                        index: 3
                    }
                ],
                currentStep: 0,
                steps: [
                {
                    id: 'cb-step1',
                    title: 'Изображение',
                    class: 'cb-item1',
                    index: 1
                }, {
                    id: 'cb-step2',
                    title: 'Рама',
                    class: 'cb-item2',
                    index: 2
                }, {
                    id: 'cb-step3',
                    title: 'Заголовок',
                    class: 'cb-item3',
                    index: 3
                }, {
                    id: 'cb-step4',
                    title: 'Цвет отпечатков',
                    class: 'cb-item4',
                    index: 4
                }],
                pictures: [
                    {
                        src: './img/pics/01.jpg',
                        alt: 'Картинка №1',
                        title: 'Картинка №1',
                        width: '176',
                        height: '220',
                        index: 1
                    },
                    {
                        src: './img/pics/02.jpg',
                        alt: 'Картинка №2',
                        title: 'Картинка №2',
                        width: '176',
                        height: '220',
                        index: 2
                    },
                    {
                        src: './img/pics/03.jpg',
                        alt: 'Картинка №3',
                        title: 'Картинка №3',
                        width: '176',
                        height: '220',
                        index: 3
                    },
                    {
                        src: './img/pics/04.jpg',
                        alt: 'Картинка №4',
                        title: 'Картинка №4',
                        width: '176',
                        height: '220',
                        index: 4
                    },
                    {
                        src: './img/pics/05.jpg',
                        alt: 'Картинка №5',
                        title: 'Картинка №5',
                        width: '176',
                        height: '220',
                        index: 5
                    },
                    {
                        src: './img/pics/06.jpg',
                        alt: 'Картинка №6',
                        title: 'Картинка №6',
                        width: '176',
                        height: '220',
                        index: 6
                    },
                    {
                        src: './img/pics/07.jpg',
                        alt: 'Картинка №7',
                        title: 'Картинка №7',
                        width: '176',
                        height: '220',
                        index: 7
                    },
                    {
                        src: './img/pics/08.jpg',
                        alt: 'Картинка №8',
                        title: 'Картинка №8',
                        width: '176',
                        height: '220',
                        index: 8
                    },
                    {
                        src: './img/pics/09.jpg',
                        alt: 'Картинка №9',
                        title: 'Картинка №9',
                        width: '176',
                        height: '220',
                        index: 9
                    },
                    {
                        src: './img/pics/10.jpg',
                        alt: 'Картинка №10',
                        title: 'Картинка №10',
                        width: '176',
                        height: '220',
                        index: 10
                    },
                    {
                        src: './img/pics/11.jpg',
                        alt: 'Картинка №11',
                        title: 'Картинка №11',
                        width: '176',
                        height: '220',
                        index: 11
                    }
                ],
                borders:[
                    {
                        src: './img/borders/rama-01.png',
                        alt: 'Багетная №1',
                        title: 'Багетная №1',
                        width: '120',
                        height: '150',
                        index: 1
                    },
                    {
                        src: './img/borders/rama-02.png',
                        alt: 'Багетная №2',
                        title: 'Багетная №2',
                        width: '120',
                        height: '150',
                        index: 2
                    },
                    {
                        src: './img/borders/rama-03.png',
                        alt: 'Багетная №3',
                        title: 'Багетная №3',
                        width: '120',
                        height: '150',
                        index: 3
                    },
                    {
                        src: './img/borders/rama-04.png',
                        alt: 'Багетная №4',
                        title: 'Багетная №4',
                        width: '120',
                        height: '150',
                        index: 4
                    },
                    {
                        src: './img/borders/rama-05.png',
                        alt: 'Багетная №5',
                        title: 'Багетная №5',
                        width: '120',
                        height: '150',
                        index: 5
                    },
                    {
                        src: './img/borders/rama-06.png',
                        alt: 'Багетная №6',
                        title: 'Багетная №6',
                        width: '120',
                        height: '150',
                        index: 6
                    },
                    {
                        src: './img/borders/rama-07.png',
                        alt: 'Багетная №7',
                        title: 'Багетная №7',
                        width: '120',
                        height: '150',
                        index: 7
                    },
                    {
                        src: './img/borders/rama-08.png',
                        alt: 'Багетная №8',
                        title: 'Багетная №8',
                        width: '120',
                        height: '150',
                        index: 8
                    },
                    {
                        src: './img/borders/rama-09.png',
                        alt: 'Багетная №9',
                        title: 'Багетная №9',
                        width: '120',
                        height: '150',
                        index: 9
                    },
                    {
                        src: './img/borders/rama-10.png',
                        alt: 'Багетная №10',
                        title: 'Багетная №10',
                        width: '120',
                        height: '150',
                        index: 10
                    },
                    {
                        src: './img/borders/rama-11.png',
                        alt: 'Багетная №11',
                        title: 'Багетная №11',
                        width: '120',
                        height: '150',
                        index: 11
                    },
                    {
                        src: './img/borders/rama-12.png',
                        alt: 'Багетная №12',
                        title: 'Багетная №12',
                        width: '120',
                        height: '150',
                        index: 12
                    },
                    {
                        src: './img/borders/rama-13.png',
                        alt: 'Багетная №13',
                        title: 'Багетная №13',
                        width: '120',
                        height: '150',
                        index: 13
                    },
                    {
                        src: './img/borders/rama-14.png',
                        alt: 'Багетная №14',
                        title: 'Багетная №14',
                        width: '120',
                        height: '150',
                        index: 14
                    },
                    {
                        src: './img/borders/rama-15.png',
                        alt: 'Багетная №15',
                        title: 'Багетная №15',
                        width: '120',
                        height: '150',
                        index: 15
                    }
                ],
                marks:[
                    {
                        id: 'mark0',
                        src: './img/marks/BahamaBlue.jpg',
                        alt: 'BahamaBlue',
                        title: 'BahamaBlue',
                        width: '136',
                        height: '136',
                        index: 1

                    },
                    {
                        id: 'mark1',
                        src: './img/marks/BambooLeaves.jpg',
                        alt: 'BambooLeaves',
                        title: 'BambooLeaves',
                        width: '136',
                        height: '136',
                        index: 2

                    },
                    {
                        id: 'mark2',
                        src: './img/marks/LilacPosies.jpg',
                        alt: 'LilacPosies',
                        title: 'LilacPosies',
                        width: '136',
                        height: '136',
                        index: 3

                    },
                    {
                        id: 'mark3',
                        src: './img/marks/PearTart.jpg',
                        alt: 'PearTart',
                        title: 'PearTart',
                        width: '136',
                        height: '136',
                        index: 4

                    },
                    {
                        id: 'mark4',
                        src: './img/marks/RhubarbStalk.jpg',
                        alt: 'RhubarbStalk',
                        title: 'RhubarbStalk',
                        width: '136',
                        height: '136',
                        index: 5

                    },
                    {
                        id: 'mark5',
                        src: './img/marks/Tangelo.jpg',
                        alt: 'Tangelo',
                        title: 'Tangelo',
                        width: '136',
                        height: '136',
                        index: 6

                    },
                    {
                        id: 'mark6',
                        src: './img/marks/CottageIvy.jpg',
                        alt: 'CottageIvy',
                        title: 'CottageIvy',
                        width: '136',
                        height: '136',
                        index: 7

                    },
                    {
                        id: 'mark7',
                        src: './img/marks/BahamaBlue.jpg',
                        alt: 'BahamaBlue',
                        title: 'BahamaBlue',
                        width: '136',
                        height: '136',
                        index: 8

                    },
                    {
                        id: 'mark8',
                        src: './img/marks/PottersClay.jpg',
                        alt: 'PottersClay',
                        title: 'PottersClay',
                        width: '136',
                        height: '136',
                        index: 9

                    }
                ]
            },
            created: function () {
                for (var i = 0; i < this.steps.length; ++i) {
                    this.steps[i].isActive = false;
                }
                this.steps[this.currentStep].isActive = true;

                for (var i = 0; i < this.pictures.length; ++i) {
                    this.pictures[i].isSelected = false;
                }
                for (var i = 0; i < this.borders.length; ++i) {
                    this.borders[i].isSelected = false;
                }
                for (var i = 0; i < this.marks.length; ++i) {
                    this.marks[i].isSelected = false;
                }
                 for (var i = 0; i < this.fonts.length; ++i) {
                    this.fonts[i].isActive = false;
                }
                this.fonts[this.currentFont].isActive = true;
            },
            methods: {
                nextStep: function () {
                    for (var i = 0; i < this.pictures.length; ++i) {
                        if (this.currentStep === 0 && this.pictures[i].isSelected) {
                            this.steps[this.currentStep].isActive = false;
                            this.currentStep++;
                            this.steps[this.currentStep].isActive = true;
                            return;
                        }
                    }
                    for (var i = 0; i < this.borders.length; ++i) {
                        if (this.currentStep === 1 && this.borders[i].isSelected) {
                            this.steps[this.currentStep].isActive = false;
                            this.currentStep++;
                            this.steps[this.currentStep].isActive = true;
                            return ;

                        }
                    }
                    for (var i = 0; i < this.fonts.length; ++i) {
                        if (this.currentStep === 2 && this.fonts[i].isActive) {
                            this.steps[this.currentStep].isActive = false;
                            this.currentStep++;
                            this.steps[this.currentStep].isActive = true;
                            return;
                        }
                    }
                },
                selectStep: function (step) {
                    this.steps[this.currentStep].isActive = false;
                    this.currentStep = step.index - 1;
                    this.steps[this.currentStep].isActive = true;
                },
                selectPicture: function (picture) {
                    if (picture.isSelected) {
                        this.pictures[picture.index - 1].isSelected = false;
                        this.result.picture = null;
                    } else {
                        for (var i = 0; i < this.pictures.length; ++i) {
                            if (this.pictures[i].isSelected) {
                                return;
                            }
                        }
                        this.pictures[picture.index - 1].isSelected = true;
                        this.result.picture = picture;
                    }
                },
                selectBorder: function (border) {
                    if (border.isSelected) {
                        this.borders[border.index - 1].isSelected = false;
                        this.result.border = null;
                    } else {
                        for (var i = 0; i < this.borders.length; ++i) {
                            if (this.borders[i].isSelected) {
                                return;
                            }
                        }
                        this.borders[border.index - 1].isSelected = true;
                        this.result.border = border;
                    }
                },
                selectFont: function (font) {
                    this.fonts[this.currentFont].isActive = false;
                    this.currentFont = font.index - 1;
                    this.fonts[this.currentFont].isActive = true;
                },
                selectMark: function (mark) {
                    if (mark.isSelected) {
                        this.marks[mark.index - 1].isSelected = false;
                        var index = -1;
                        for(var i=0;i<this.result.marks.length;++i){
                            if(this.result.marks[i].id === mark.id){
                                index=i;
                                break;
                            }
                        }
                        if(index > -1) {
                            this.result.marks.splice(index, 1);
                        }
                    } else {
                        var count = 0;
                        for (var i = 0; i < this.marks.length; ++i) {
                            if (this.marks[i].isSelected) {
                                count++;
                            }
                        }
                        if(count<3){
                            this.marks[mark.index - 1].isSelected = true;
                            this.result.marks.push(mark);
                        }                      
                    }
                }
            }
        });
    });
})(jQuery)