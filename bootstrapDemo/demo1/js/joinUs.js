$(function () {
  initMap();
  $('.tab-menu .tab-item:nth-child(1)').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    $.get("./tabs/tab-item-map.html",
      function (data) {
        $('.tab-text').html('');
        $('.tab-text').append(data);
        var result1 = window.matchMedia('(min-width:10px)');
        var result2 = window.matchMedia('(min-width:768px)');
        if (result1.matches) {
          $('.tab-text').find('#container').height('300px');
        }
        if (result2.matches) {
          $('.tab-text').find('#container').height('500px');
        }
        initMap();

      },
      "html"
    );

  })
  $('.tab-menu .tab-item:nth-child(2)').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');

    $.get("./tabs/tab-item-join.html",
      function (data) {
        map.destroy();
        map = null;
        $('.tab-text').html('');
        $('.tab-text').append(data);
        $('.post-list .post-item').on('click', function () {
          $(this).addClass('active').parent().siblings().find('.post-item').removeClass('active');
          $(this).siblings('.post-discrible').show().parent().siblings().find('.post-discrible').hide();
        })

      },
      "html"
    );
  })
  $('.post-list .post-item').on('click', function () {
    $(this).addClass('active').parent().siblings().find('.post-item').removeClass('active');
    $(this).siblings('.post-discrible').show().parent().siblings().find('.post-discrible').hide();
  })

})

var map = null;

function initMap() {
  map = new AMap.Map('container', {
    zoom: 10, //级别
    // center: [116.397428, 39.90923], //中心点坐标
    pitch: 0, // 地图俯仰角度，有效范围 0 度- 83 度
    viewMode: '3D' //使用3D视图
  });
  map.on('complete', function () {
    // 地图图块加载完成后触发
    AMap.plugin([
      'AMap.ToolBar',
      'AMap.Scale',
      'AMap.OverView',
      'AMap.MapType',
      'AMap.Geolocation',
    ], function () {
      // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
      map.addControl(new AMap.ToolBar());

      // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
      map.addControl(new AMap.Scale());

      // 在图面添加鹰眼控件，在地图右下角显示地图的缩略图
      map.addControl(new AMap.OverView({
        isOpen: true
      }));

      // 在图面添加类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
      map.addControl(new AMap.MapType());

      // 在图面添加定位控件，用来获取和展示用户主机所在的经纬度位置
      map.addControl(new AMap.Geolocation());
    });
  });
}