"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "Home",
  data() {
    return {
      swiperList: [
        {
          imageSrc: "../../static/image/home_swipe_1.png",
          text: "1"
        },
        {
          imageSrc: "../../static/image/home_swipe_2.png",
          text: "2"
        },
        {
          imageSrc: "../../static/image/home_swipe_1.png",
          text: "3"
        },
        {
          imageSrc: "../../static/image/home_swipe_2.png",
          text: "4"
        }
      ],
      searchValue: "",
      topMenuList: [
        {
          iconClassName: "icon-qianbao",
          title: "\u671D\u671D\u5B9D"
        },
        {
          iconClassName: "icon-qian",
          title: "\u6536\u652F\u660E\u7EC6"
        },
        {
          iconClassName: "icon-zhuanzhang",
          title: "\u8F6C\u8D26"
        },
        {
          iconClassName: "icon-yidongyunkongzhitaiicon01",
          title: "\u603B\u89C8"
        }
      ],
      mainMenuList: [
        [
          {
            iconClassName: "icon-qianbao",
            title: "\u7533\u8BF7\u4FE1\u7528\u5361"
          },
          {
            iconClassName: "icon-qian",
            title: "\u4ED6\u884C\u5361\u8F6C\u5165"
          },
          {
            iconClassName: "icon-zhuanzhang",
            title: "\u501F\u94B1"
          },
          {
            iconClassName: "icon-yidongyunkongzhitaiicon01",
            title: "\u57CE\u5E02\u670D\u52A1"
          },
          {
            iconClassName: "icon-qian",
            title: "\u70ED\u95E8\u6D3B\u52A8"
          }
        ],
        [
          {
            iconClassName: "icon-zhuanzhang",
            title: "\u517B\u8001\u91D1\u878D"
          },
          {
            iconClassName: "icon-yidongyunkongzhitaiicon01",
            title: "\u8BDD\u8D39\u6D41\u91CF"
          },
          {
            iconClassName: "icon-zhuanzhang",
            title: "\u7406\u8D22\u4EA7\u54C1"
          },
          {
            iconClassName: "icon-yidongyunkongzhitaiicon01",
            title: "\u94F6\u884C\u5361"
          },
          {
            iconClassName: "icon-yidongyunkongzhitaiicon01",
            title: "\u5168\u90E8"
          }
        ]
      ]
    };
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.searchValue,
    b: common_vendor.f($data.topMenuList, (item, k0, i0) => {
      return {
        a: common_vendor.n(item.iconClassName),
        b: common_vendor.t(item.title)
      };
    }),
    c: common_vendor.f($data.mainMenuList, (i, k0, i0) => {
      return {
        a: common_vendor.f(i, (item, k1, i1) => {
          return {
            a: common_vendor.n(item.iconClassName),
            b: common_vendor.t(item.title)
          };
        })
      };
    }),
    d: common_vendor.f($data.swiperList, (i, k0, i0) => {
      return {
        a: i.imageSrc
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-18810f55"], ["__file", "D:/projects/uniapp/demo22/my-web-bank/pages/index/Home.vue"]]);
wx.createPage(MiniProgramPage);
