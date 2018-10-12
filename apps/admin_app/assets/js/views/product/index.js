import MainView from '../main';

export default class View extends MainView {
    mount() {
      super.mount();
      console.log('product view mounted');
      document.getElementById("product-sort-select").onchange = function(){
        window.location.replace(this.value);
      };

      document.getElementById('product-listing-draft').onclick = function() {
        window.location.replace(this.value);
      };

      document.getElementById('product-listing-active').onclick = function() {
        window.location.replace(this.value);
      };

      document.getElementById('product-listing-inactive').onclick = function() {
        window.location.replace(this.value);
      };

      $(function(){
        $('#btn_renew').click(function(){
          var val = [];
          $(':checkbox:checked').each(function(i){
            val[i] = $(this).val();
          });
        });
      });
    }

    unmount() {
      console.log('product index unmounted');
      super.unmount();
    }
  }
