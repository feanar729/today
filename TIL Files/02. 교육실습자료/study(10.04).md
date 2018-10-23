<!-- 금일 주제: 클래스 기반 웹UI개발 -->
<!-- 
  public method
  1: interaction에 대한 기능을 기준점으로 객체의 method를 제작한다.
  2: 

  - tip: class는 인자를 잘쓰게 되면(= 각 클래스의 매서드를 전달) 재사용이 가능한 기능 응징성은 높고 결합도는 낮은
-->
```
javascript
//view class,  PromotionContent.js
class PromotionContent {
  constructor({afterSelectorObj}) {
    this.afterSelectorObj = afterSelectorObj;
  }
  select() {
    //선택이 되면 ContentSlider중에 review컨텐츠를 업데이트 해야 한다.
    ///....do somethig....
    this.afterSelectorObj.update({});
  }
}

//view class, ContentSlider
class ContentSlider {
  constructor({baseNode, contents, bNavigationUI}) {
    this.baseNode = baseNode;
    this.contents = contents;
  }
  initialize() {
    this.render();
    this.registEvent();
  }
  update(obj) {

  }
  render() {
    if() { const html = makeInitialHTML();}
    else if() {  const html = makeItemHtml();}}
    this.baseNode.innerHTML = "";
  }
  registEvent() {
    const ulNode = $("ul");
    ulNode.addEventListener('click', moveLeft);
  }
  makeInitialHTML () {
    return this.content.reduce( (prev, next) => {
        // html 완성하기~~
    }, "");
  }
  makeItemHtml () {
    return this.item.reduce();
  }
  moveLeft() {

  }
  moveRight() {

  }
  changeItemZoom() {

  }
  previewItem() {

  }
}


//app.js 
//객체의 초기화 및 인자들이 노출되어야 한다.
//객체간의 협력이 잘 보여야 함. (누가 누구를 필요로 하는지)
const varietyNode = $(".variety");
const promotionNode = $(".promotion");

const review = new ContentSlider([{},{}]);

const variety = new ContentSlider({
  'baseNode' : varietyNode,
  'initialData' : [{},{},{}],
  'bNavagationUI' : true 
});

variery.initialize();
//review 객체가 필요해서 전달. (의존성주입)
const promotionContent = new PromotionContent({ 
  'contentData' : [{},{}], 
  'afterSelectorObj' : review)
});
promotionContent.initialize(promotionNode);
```