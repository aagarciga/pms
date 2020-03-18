import "../css/site-booking.scss";

import Litepicker from "litepicker";
import $ from "jquery";

console.log("Site Booking Logic")

let picker = new Litepicker({
    element: document.getElementById("booking_request_checkinAt"),
    elementEnd: document.getElementById("booking_request_checkoutAt"),
  //   parentEl: document.getElementById("calendar"),
    format: "MMMM D, YYYY",
    singleMode: false,
    numberOfMonths: 2,
    numberOfColumns: 2,
    lang: "en-US",
  //   inlineMode: true,
    firstDay: 0,  
    hotelMode: true,
    bookedDaysInclusivity: '[)',
    disallowBookedDaysInRange: true,
    selectForward: true,  
    showTooltip: true,
    mobileFriendly: true,
  //   splitView: true,
    bookedDays: [["2020-02-26", "2020-02-28"], "2020-03-7"],
    tooltipText: {
      one: "night",
      other: "nights"
    }
  });

  let siteBooking = (function(Litepicker, $,  global){
    let constants = {};
    let functions = {};
    let htmlBindings = {};
    let eventHandlers = {};
    let properties = {};

    constants.ACTION_ADD = 'add';
    constants.ACTION_REMOVE = 'remove';
    constants.CONTROL_NAME = 'control-group';
    constants.ROOM_CONTROL_GROUP = 'room-control-group';

    properties.roomSelectorCounter = 1;

    htmlBindings.formSelector = "#hola";
    htmlBindings.formGroupSelector = ".form-group"; 
    htmlBindings.formInputGroupAppendedButtonSelector = ".input-group-append";
    
    functions.init = function () {
      global.console.log("site booking Init");
    
      functions.addRoomControl();
      
      $(htmlBindings.formSelector).on('click', 
      htmlBindings.formInputGroupAppendedButtonSelector, 
      eventHandlers.formInputGroupAppendedButton__onClick);
    }

    functions.addRoomControl = function(option){
      let $form = $(htmlBindings.formSelector);
      let $formGroup = functions.buildRoomSelectorControl(option);

      functions.appendToForm($form, $formGroup);
    };

    functions.appendToForm = function($form, $formGroup){
      $form.append($formGroup);
      properties.roomSelectorCounter++;
    };

    functions.removeControlAndUpdate = function (controlIndex) {
      
      functions.removeControl(controlIndex);
      properties.roomSelectorCounter--;
    }

    functions.removeControl = function (controlIndex){
      let $controlGroup = functions.getControlGroup(controlIndex);
      // console.log("removing:", $controlGroup);
      $controlGroup.remove();
      let controlsToUpdate = functions.getControlGroupAfterIndex(controlIndex);
      // console.log("to update: ", controlsToUpdate);
      functions.updateControlGroupAfterIndex(controlIndex);
    }

    functions.buildControlGroupClassBy = function(index){
      return `${constants.CONTROL_NAME}-${index}`;
    }

    functions.getControlGroup = function(index) {
      let controlGroupName = "."+functions.buildControlGroupClassBy(index);
      return $(controlGroupName);
    }

    functions.getControlGroupAfterIndex = function(index) {
      let result = new Array();
      let totalControlCount = $('.'+constants.ROOM_CONTROL_GROUP).length;
      let controlCountLeft = totalControlCount - index;
      
      let start = index + 1; //Alex: excluding the index of the control to remove
      let ends = start + controlCountLeft; //Alex: the remaining controls to update

      for(let i = start; i <= ends; i++){
        result.push(functions.getControlGroup(i));
      }
      return result;
    }

    functions.updateControlGroupAfterIndex = function(index){
      let collection = functions.getControlGroupAfterIndex(index);

      collection.forEach(function(item, i, array) {
        functions.updateControlGroup(index+i, item);
      });
    }

    functions.updateControlGroup = function(index, $controlGroup){
      //TODO: update each control group
      //Alex: index passed as a parameter for optimization. 
      console.log(index, $controlGroup);

      $controlGroup.removeClass(functions.buildControlGroupClassBy(index + 1))
        .addClass(functions.buildControlGroupClassBy(index));
      let $label = $controlGroup.find('label');
      $label.attr('for', $label.attr('for').replace(/.$/,index) );
      $label.html($label.html().replace(/.$/,index));
      let $select = $controlGroup.find('select');
      $select.attr('id', $select.attr('id').replace(/.$/, index));
      let $button = $controlGroup.find('button');
      console.log(" 1 >>>", $button.data('controllerIndex'), index);
      $button.data("controllerIndex", index);
      $button.attr('id', $select.attr('id').replace(/.$/, index));
      console.log(" 2 >>>", $button.data('controllerIndex'), index);
    }

    functions.buildRoomSelectorControl = function(option = 0){
      // Alex: using Template Literals
      let markup = `+`;
      let action = constants.ACTION_ADD;
      if(properties.roomSelectorCounter > 1){
        markup = `-`;
        action = constants.ACTION_REMOVE;
      }
      let selectedOption_0, selectedOption_1 = '';
      if(option === 0){
        selectedOption_0 = `selected`;
      } else {
        selectedOption_1 = `selected`;
      }
 
      return `
      <div class="form-group room-control-group ${constants.CONTROL_NAME}-${properties.roomSelectorCounter}">
        <label for="Select_room_${properties.roomSelectorCounter}">Room ${properties.roomSelectorCounter}</label>
        <div class="input-group">
        <select class="form-control" id="Select_room_${properties.roomSelectorCounter}">
          <option value="0" ${selectedOption_0}>Standard Double Room</option>
          <option value="1" ${selectedOption_1}>Standard Triple Room</option>
        </select>
        <div class="input-group-append">
          <button data-action="${action}" data-controller-index="${properties.roomSelectorCounter}" class="btn btn-outline-secondary" type="button" id="button_addon_${properties.roomSelectorCounter}">${markup}</button>
        </div>
    </div>
    `;
    };

    eventHandlers.formInputGroupAppendedButton__onClick = function (event) {
      // global.console.info(event, properties.roomSelectorCounter);
      let $button = $(event.target);
      let action = $button.data('action');
      let controllerIndex = $button.data('controllerIndex');


      if(action === constants.ACTION_ADD){
        functions.addRoomControl(0);
      } else {

        functions.removeControlAndUpdate(controllerIndex);

      }
      
    };

    return {
      init : functions.init
    }
  }(Litepicker, $, window));

  $(window.document).ready(function(){
    siteBooking.init();
  });

