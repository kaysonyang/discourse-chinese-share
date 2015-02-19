import Sharing from 'discourse/lib/sharing';

export default {
  name: 'chinese-share-links',

  initialize: function() {

    Sharing.addSource({
      id: 'weibo',
      iconClass: 'fa-weibo',
      generateUrl: function(link, title) {
        return ("http://service.weibo.com/share/share.php?url=" + encodeURIComponent(link) + "&title=分享了来自 @宁皓网 的话题【" + encodeURIComponent(title))+ "】&searchPic=true&style=number";
      },
      shouldOpenInPopup: true,
      popupHeight: 370
    });

    Sharing.addSource({
      id: 'wechat',
      iconClass: 'fa-wechat',
      generateUrl: function(link) {
        return ("http://s.jiathis.com/qrcode.php?url=" + encodeURIComponent(link));
      },
      shouldOpenInPopup: true,
      popupHeight: 200
    });

  }
};
