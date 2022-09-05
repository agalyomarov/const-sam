$(function() {
    function buildSelect() {
        let select = $("#select-year-auto"),
            startYear = 1995,
            today = new Date(),
            year = today.getFullYear();

        for (startYear; startYear <= year; startYear++) {
            select.append(
                '<option value="' + startYear + '">' + startYear + "</option>"
            );
        }

        select.select2({
            placeholder: "Год выпуска автомобиля *",
            minimumResultsForSearch: -1,
            width: "100%",
        });
    }

    buildSelect();

    $(".open-mp-order-chehol").magnificPopup();
    $(".close-mp-order-chehol").magnificPopup();

    $(".select-form .selected").click(function(e) {
        // расскрываем скрытый список
        e.preventDefault();
        let selectForm = $(this).closest(".select-form"),
            ul = selectForm.find(".select-ul");

        if (selectForm.hasClass("disabled")) return;
        ul.fadeIn(100, function() {
            $(this).addClass("open");
        });
    });

    function closeSelect(ul) {
        ul.fadeOut(100, function() {
            $(this).removeClass("open");
        });
    }

    var infoSelected = {
        base: 1, // цвет основы - черный
        yzorColor: 1, // цвет центра - черный
        yzorType: "type-5", // тип узора - по умолчанию Классика
        borderHead: 1,
        colorHead: "0", // цвет подголовника
        includeBorder: false,
        colorBorder: "0",
        colorBorderCut: "0",
        colorSelectCutBorder: "0",
        cutHead: "0",
        cutDown: "0",
        cutShirt: "0",
        headRomb: false,
        seam: 4,
        seamBord: 4,
    };

    function formitPriceSelect() {
        // материал
        let mat = $("#ul-filter-2 li.active");
        let yzor = $("#ul-filter-4 li.active"),
            priceYzor = yzor.attr("data-price");
        let price = 0;
        if (mat.length) {
            let priceMat = mat.attr("data-price");
            price += parseInt(priceMat);
        }
        if (yzor.length) {
            let priceYzor = yzor.attr("data-price");
            price += parseInt(priceYzor);
        }

        if (!price) {
            $(".row-hode-price").hide();
        } else {
            $("#price-select-style").text(price);
            $(".row-hode-price").show();
        }
        // узор
    }

    function formitPriceSelect2() {
        // материал
        let mat = $("#ul-filter-2-2 li.active");
        let yzor = $("#ul-filter-4-4 li.active"),
            priceYzor = yzor.attr("data-price");
        let price = 0;
        if (mat.length) {
            let priceMat = mat.attr("data-price");
            price += parseInt(priceMat);
        }
        if (yzor.length) {
            let priceYzor = yzor.attr("data-price");
            price += parseInt(priceYzor);
        }

        if (!price) {
            $(".row-hode-price-2").hide();
        } else {
            $("#price-select-style-2").text(price);
            $(".row-hode-price-2").show();
        }
        // узор
    }

    // выбираем опцию и скрываем список
    $(".select-form .select-ul li").click(function(e) {
        e.preventDefault();
        let ul = $(this).closest(".select-ul"),
            html = $(this).attr("data-html"),
            inputVal = $(this).attr("data-input"),
            selectWrap = $(this).closest(".select-form"),
            input = selectWrap.find(".input").find("input"),
            title = selectWrap.find(".selected span"),
            th = $(this);

        ul.find(".name.selected-li").removeClass("selected-li");
        $(this).find(".name").addClass("selected-li");
        input.attr("value", inputVal);
        title.html(html);
        // скрываем
        closeSelect(ul);

        if ($(this).closest(".block-select-mine-style").length) {
            /* Выбери свой стиль */
            ul.find("li.active").removeClass("active");
            th.addClass("active");

            // скрываем все следующие ul-select
            let thSelect = ul.closest(".col-with-select");
            $(".col-with-select").each(function() {
                if ($(this).index() <= thSelect.index()) return;
                $(".select-form", $(this)).addClass("disabled");
                $(".select-form .selected", $(this)).removeClass("active");
                $(".select-form .selected span", $(this)).text(
                    $(".select-form .selected", $(this)).attr("data-default")
                );
                $(".select-form li.active", $(this)).removeClass("active");
            });

            // открываем select с цветами материала
            if (ul.attr("id") == "ul-filter-1") {
                let idTh = th.attr("data-id");
                $("#ul-filter-2 li").each(function() {
                    if ($(this).attr("data-parent") === idTh) {
                        $(this).addClass("show");
                    } else {
                        $(this).removeClass("show");
                    }
                });
                $("#col-form-select-2 .select-form").removeClass("disabled");
                $(".head-block-1 .img-material").html("");
                $(".head-block-1 .img-yzor").html("");
            }

            // открываем select с цветами материала
            if (ul.attr("id") == "ul-filter-2") {
                let image = th.attr("data-image-src");
                $(".head-block-1 .img-material")
                    .html("")
                    .prepend('<img src="' + image + '" alt="">');
                $("#col-form-select-3 .select-form").removeClass("disabled");
                $(".head-block-1 .img-yzor").html("");
            }

            // открываем select с цветами материала
            if (ul.attr("id") == "ul-filter-3") {
                let idTh = th.attr("data-id");
                $("#ul-filter-4 li").each(function() {
                    if ($(this).attr("data-parent") === idTh) {
                        $(this).addClass("show");
                    } else {
                        $(this).removeClass("show");
                    }
                });
                $("#col-form-select-4 .select-form").removeClass("disabled");
                $(".head-block-1 .img-yzor").html("");
            }

            if (ul.attr("id") == "ul-filter-4") {
                let image = th.attr("data-image-src");
                $(".head-block-1 .img-yzor")
                    .html("")
                    .prepend('<img src="' + image + '" alt="">');
            }

            /*========================================*/
            if (ul.attr("id") == "ul-filter-1-1") {
                let idTh = th.attr("data-id");
                $("#ul-filter-2-2 li").each(function() {
                    if ($(this).attr("data-parent") === idTh) {
                        $(this).addClass("show");
                    } else {
                        $(this).removeClass("show");
                    }
                });
                $("#col-form-select-2-2 .select-form").removeClass("disabled");
                $(".head-block-2 .img-material").html("");
                $(".head-block-2 .img-yzor").html("");
            }
            // открываем select с цветами материала
            if (ul.attr("id") == "ul-filter-2-2") {
                let image = th.attr("data-image-src");
                $(".head-block-2 .img-material")
                    .html("")
                    .prepend('<img src="' + image + '" alt="">');
                $("#col-form-select-3-3 .select-form").removeClass("disabled");
                $(".head-block-2 .img-yzor").html("");
            }
            // открываем select с цветами материала
            if (ul.attr("id") == "ul-filter-3-3") {
                let idTh = th.attr("data-id");
                $("#ul-filter-4-4 li").each(function() {
                    if ($(this).attr("data-parent") === idTh) {
                        $(this).addClass("show");
                    } else {
                        $(this).removeClass("show");
                    }
                });
                $("#col-form-select-4-4 .select-form").removeClass("disabled");
                $(".head-block-2 .img-yzor").html("");
            }

            if (ul.attr("id") == "ul-filter-4-4") {
                let image = th.attr("data-image-src");
                $(".head-block-2 .img-yzor")
                    .html("")
                    .prepend('<img src="' + image + '" alt="">');
            }

            formitPriceSelect();
            formitPriceSelect2();
        } else {
            // если это цвет
            if ($(this).find("i").length) {
                let color = $(this).attr("data-i-color");
                selectWrap.find(".selected i").css("background", color);
            }

            // Подставляем основу
            let baseColor = $(this).attr("data-select-type");
            if (baseColor == "base") {
                infoSelected["base"] = $(this).attr("data-select-img");
            }
            /*============================================================*/

            // подставляем узор
            let type = $(this).attr("data-select-type");
            if (type == "1-base") {
                infoSelected["yzorType"] = $(this).attr("data-select-img");
            }

            /*============================================================*/

            // подставляем цвет центра
            let colorCenter = $(this).attr("data-select-type");
            if (colorCenter == "base-center-color") {
                infoSelected["yzorColor"] = $(this).attr("data-select-img");
            }

            /*============================================================*/

            // подставляем бочка
            let colorBorder = $(this).attr("data-type"),
                colorSelectedBorder = $(this).attr("data-select-type");
            if (colorBorder === "border-type") {
                infoSelected["includeBorder"] = $(this).attr("data-value");
            }
            if (colorSelectedBorder === "color-border-hide") {
                infoSelected["colorBorder"] = $(this).attr("data-select-img");
            }
            if (colorBorder === "border-type-сut") {
                infoSelected["colorBorderCut"] = $(this).attr("data-value");
            }
            if (colorSelectedBorder === "color-border-hide-cut") {
                infoSelected["colorSelectCutBorder"] = $(this).attr("data-select-img");
            }

            /*============================================================*/

            // выбираем цвет нити

            let colorSeam = $(this).attr("data-select-type");
            if (colorSeam == "color-seam") {
                infoSelected["seam"] = $(this).attr("data-select-img");
            }

            /*============================================================*/

            // выбираем цвет боковой нити

            let colorSeamBord = $(this).attr("data-select-type");
            if (colorSeamBord == "color-seam-bord") {
                infoSelected["seamBord"] = $(this).attr("data-select-img");
            }

            /*============================================================*/

            // подставляем подголовник
            let colorHead = $(this).attr("data-select-type");
            if (colorHead == "base-header") {
                infoSelected["colorHead"] = $(this).attr("data-select-img");
            }

            /*============================================================*/

            // отрезной верх
            let colorHeadCut = $(this).attr("data-select-type");
            if (colorHeadCut == "cut-base-header") {
                infoSelected["cutHead"] = $(this).attr("data-select-img");
            }

            /*============================================================*/

            // отрезной низ
            let colorDownCut = $(this).attr("data-select-type");
            if (colorDownCut == "cut-base-down") {
                infoSelected["cutDown"] = $(this).attr("data-select-img");
            }

            /*============================================================*/

            // вырез майка

            if (colorDownCut == "cut-base-shirt") {
                infoSelected["cutShirt"] = $(this).attr("data-select-img");
            }

            /*============================================================*/

            changeImg();
            // подголовник ромб
            checkHeadRomb();

            if ($(this).attr("data-price")) {
                let selectUl = $(this).closest(".select-form"),
                    inputOption = selectUl.find("input");
                inputOption.attr("value", $(this).attr("data-price"));
            }

            // формируем цену
            formatPrice();
        }
    });

    $("#show-popup-order-style-1").click(function(e) {
        e.preventDefault();

        let data = {
            material: $("#ul-filter-1 li.active").attr("data-id"),
            material_color: $("#ul-filter-2 li.active").attr("data-id"),
            yzor: $("#ul-filter-3 li.active").attr("data-id"),
            yzor_color: $("#ul-filter-4 li.active").attr("data-id"),
        };
        $('#form-order-style-1 [name="data"]').val(JSON.stringify(data));
        $('#form-order-style-1 [name="type-const"]').val("1");
        $.magnificPopup.open({
                items: {
                    src: "#form-order-select-style-1",
                },
                type: "inline",
            },
            0
        );
    });

    $("#show-popup-order-style-2").click(function(e) {
        e.preventDefault();

        let data = {
            material: $("#ul-filter-1-1 li.active").attr("data-id"),
            material_color: $("#ul-filter-2-2 li.active").attr("data-id"),
            yzor: $("#ul-filter-3-3 li.active").attr("data-id"),
            yzor_color: $("#ul-filter-4-4 li.active").attr("data-id"),
        };
        $('#form-order-style-1 [name="data"]').val(JSON.stringify(data));
        $('#form-order-style-1 [name="type-const"]').val("2");

        $.magnificPopup.open({
                items: {
                    src: "#form-order-select-style-1",
                },
                type: "inline",
            },
            0
        );
    });

    $("#form-order-style-1").submit(function(e) {
        e.preventDefault();
        let form = $(this);
        if (!form.find('[name="data"]').val() &&
            (!form.find('[name="name"]').val() ||
                form.find('[name="name"]').val().length <= 4)
        ) {
            return false;
        }
        $.ajax({
            type: "GET",
            url: "/assets/constructor/sendOrderConst.php",
            data: form.serialize(),
            success: function(data) {
                $.magnificPopup.open({
                    items: {
                        src: "#thank-you",
                    },
                    type: "inline",
                });
                setTimeout(function() {
                    $.magnificPopup.close();
                }, 3000);
            },
        });
    });

    // изменение взаимосвязанных узоров и цветов
    function changeImg() {
        // основа
        $(".img-base img").attr(
            "src",
            "assets/constructor/img/1-base/" + infoSelected["base"] + ".png"
        );
        // узор основы
        $(".img-yzor img").attr(
            "src",
            "assets/constructor/img/2-base/" +
            infoSelected["yzorType"] +
            "/" +
            infoSelected["base"] +
            ".png"
        );
        // цвет центра
        $(".img-center img").attr(
            "src",
            "assets/constructor/img/2-base/" +
            infoSelected["yzorType"] +
            "/" +
            infoSelected["yzorColor"] +
            ".png"
        );
        // цвет бочков
        if (infoSelected["includeBorder"] > 0) {
            // добавляем бочка
            let currentColor = infoSelected["colorBorder"],
                colorBorder = infoSelected["yzorColor"]; // по умолчанию совпадает с цветом центра
            if (currentColor != "0") {
                colorBorder = currentColor;
                $("#i-color-border").show();
            } else {
                $("#i-color-border").hide();
            }
            $(".border-img img").each(function() {
                $(this).hide();
            });
            if (infoSelected["includeBorder"] == "1") {
                $(".border-img img.border-1").attr(
                    "src",
                    "assets/constructor/img/3-base/type-1/type-1/" + colorBorder + ".png"
                );
                $(".border-img img.border-1").show();
            } else if (infoSelected["includeBorder"] == "2") {
                $(".border-img img.border-2").attr(
                    "src",
                    "assets/constructor/img/3-base/type-1/type-2/" + colorBorder + ".png"
                );
                $(".border-img img.border-2").show();
            }

            $("#color-border-hide").show();
        } else {
            $(".border-img img").each(function() {
                $(this).hide();
            });
            // не добавляем - удаляем бочка
            $("#color-border-hide").hide();
        }

        $(".img-border-cut img").each(function() {
            $(this).hide();
        });

        if (infoSelected["colorBorderCut"] !== "0") {
            $("#color-border-hide-cut").show();
            let colorDef = infoSelected["yzorColor"];
            if (infoSelected["colorSelectCutBorder"] !== "0") {
                colorDef = infoSelected["colorSelectCutBorder"];
            }
            if (infoSelected["colorBorderCut"] === "3") {
                $(".img-border-cut img.border-3").attr(
                    "src",
                    "assets/constructor/img/3-base/type-1/type-3/" + colorDef + ".png"
                );
                $(".img-border-cut img.border-3").show();
            } else if (infoSelected["colorBorderCut"] === "4") {
                $(".img-border-cut img.border-4").attr(
                    "src",
                    "assets/constructor/img/3-base/type-1/type-4/" + colorDef + ".png"
                );
                $(".img-border-cut img.border-4").show();
            }
        } else {
            $("#color-border-hide-cut").hide();
        }

        // цвет швов
        let numberSelectedColor = infoSelected["yzorType"];
        numberSelectedColor = numberSelectedColor.split("-");
        $(".img-seam img").attr(
            "src",
            "assets/constructor/img/5-base/" +
            numberSelectedColor[1] +
            "/" +
            infoSelected["seam"] +
            ".png"
        );
        $(".img-seam-border img").attr(
            "src",
            "assets/constructor/img/5-base/seam-border/" +
            infoSelected["seamBord"] +
            ".png"
        );

        // цвет подголовника
        if (infoSelected["colorHead"] !== "0") {
            $("#i-color-head").show();
            $(".img-head img").attr(
                "src",
                "assets/constructor/img/4-base/" + infoSelected["colorHead"] + ".png"
            );
        } else {
            $("#i-color-head").hide();
            $(".img-head img").attr(
                "src",
                "assets/constructor/img/4-base/" + infoSelected["yzorColor"] + ".png"
            );
        }
        // отрезной цвет
        checkCutHead();

        // отрезной низ
        checkCutDown();

        // вырез майка
        checkCutShirt();
    }

    function formatMoney(number, decPlaces, decSep, thouSep) {
        (decPlaces = isNaN((decPlaces = Math.abs(decPlaces))) ? 2 : decPlaces),
        (decSep = typeof decSep === "undefined" ? "." : decSep);
        thouSep = typeof thouSep === "undefined" ? "," : thouSep;
        var sign = number < 0 ? "-" : "";
        var i = String(
            parseInt((number = Math.abs(Number(number) || 0).toFixed(decPlaces)))
        );
        var j = (j = i.length) > 3 ? j % 3 : 0;

        return (
            sign +
            (j ? i.substr(0, j) + thouSep : "") +
            i.substr(j).replace(/(\decSep{3})(?=\decSep)/g, "$1" + thouSep)
        );
    }

    function formatPrice() {
        let arrPrices = {
                basePrice: 8200,
                yzor: $('[name="input-yzor"]').val(),
                border: $('[name="input-border"]').val(),
                borderCut: $('[name="input-cut-border"]').val(),
                romb: 0,
                down: 0,
                head: 0,
                shirt: 0,
                logos: 0,
                double: 0,
                dopporolon: 0,
            },
            endPrice = 0;
        if ($("#checkbox-1").prop("checked")) {
            arrPrices["romb"] = $("#checkbox-1").val();
        } else {
            arrPrices["romb"] = 0;
        }

        if ($("#checkbox-2").prop("checked")) {
            arrPrices["down"] = $("#checkbox-2").val();
        } else {
            arrPrices["down"] = 0;
        }

        if ($("#checkbox-3").prop("checked")) {
            arrPrices["head"] = $("#checkbox-3").val();
        } else {
            arrPrices["head"] = 0;
        }

        if ($("#checkbox-4").prop("checked")) {
            arrPrices["shirt"] = $("#checkbox-4").val();
        } else {
            arrPrices["shirt"] = 0;
        }

        if ($("#checkbox-5").prop("checked")) {
            arrPrices["logos"] = $("#checkbox-5").val();
        } else {
            arrPrices["logos"] = 0;
        }

        if ($("#checkbox-6").prop("checked")) {
            arrPrices["double"] = $("#checkbox-6").val();
        } else {
            arrPrices["double"] = 0;
        }

        if ($("#checkbox-7").prop("checked")) {
            arrPrices["dopporolon"] = $("#checkbox-7").val();
        } else {
            arrPrices["dopporolon"] = 0;
        }

        $.each(arrPrices, function(i, v) {
            endPrice += v * 1;
        });

        $("#span-end-price").text(formatMoney(endPrice, ".", ",", " "));
    }

    function checkCutHead() {
        if (infoSelected["cutHead"] !== "0") {
            $("#i-color-head-cut").show();
            $(".img-cut-head img").attr(
                "src",
                "assets/constructor/img/3-base/type-3/" +
                infoSelected["cutHead"] +
                ".png"
            );
        } else {
            $("#i-color-head-cut").hide();
            $(".img-cut-head img").attr(
                "src",
                "assets/constructor/img/3-base/type-3/" + infoSelected["base"] + ".png"
            );
        }
    }

    function checkCutDown() {
        if (infoSelected["cutDown"] !== "0") {
            $("#i-color-down-cut").show();
            $(".img-cut-down img").attr(
                "src",
                "assets/constructor/img/3-base/type-4/" +
                infoSelected["cutDown"] +
                ".png"
            );
        } else {
            $("#i-color-down-cut").hide();
            $(".img-cut-down img").attr(
                "src",
                "assets/constructor/img/3-base/type-4/" + infoSelected["base"] + ".png"
            );
        }
    }

    function checkCutShirt() {
        if (infoSelected["cutShirt"] !== "0") {
            $("#i-color-shirt-cut").show();
            $(".img-cut-shirt img").attr(
                "src",
                "assets/constructor/img/3-base/type-2/" +
                infoSelected["cutShirt"] +
                ".png"
            );
        } else {
            $("#i-color-shirt-cut").hide();
            $(".img-cut-shirt img").attr(
                "src",
                "assets/constructor/img/3-base/type-2/" + infoSelected["base"] + ".png"
            );
        }
    }

    function checkHeadRomb() {
        if (infoSelected["headRomb"]) {
            let color = infoSelected["colorHead"];
            if (color === "0") {
                color = infoSelected["yzorColor"];
            }
            $(".img-romb-head img").attr(
                "src",
                "assets/constructor/img/2-base/type-9/" + color + ".png"
            );
        } else {
            $(".img-romb-head img").attr(
                "src",
                "assets/constructor/img/2-base/type-9/" +
                infoSelected["yzorColor"] +
                ".png"
            );
        }
    }

    // если выбрали подголовник-ромб

    $("#checkbox-1").change(function(e) {
        infoSelected["headRomb"] = $(this).prop("checked");
        if ($(this).prop("checked")) {
            checkHeadRomb();
            $(".img-romb-head").show();
        } else {
            $(".img-romb-head").hide();
        }
        formatPrice();
    });

    // если выбрали отрезной верх

    $("#checkbox-3").change(function(e) {
        if ($(this).prop("checked")) {
            let select = $("#select-color-head-cut .selected-li"),
                li = select.closest("li"),
                currentColor = li.attr("data-select-img");
            checkCutHead();
            $("#color-header-cut").show();
            $(".img-cut-head").show();
        } else {
            // сбрасываем по умолчанию
            $(".img-cut-head img").attr(
                "src",
                "assets/constructor/img/3-base/type-3/" + infoSelected["base"] + ".png"
            );
            $("#color-header-cut").hide();
            $(".img-cut-head").hide();
        }
        formatPrice();
    });

    // если выбрали отрезной низ

    $("#checkbox-2").change(function(e) {
        if ($(this).prop("checked")) {
            let select = $("#select-color-down-cut .selected-li"),
                li = select.closest("li"),
                currentColor = li.attr("data-select-img");
            checkCutDown();
            $("#color-down-cut").show();
            $(".img-cut-down").show();
        } else {
            // сбрасываем по умолчанию
            $(".img-cut-down img").attr(
                "src",
                "assets/constructor/img/3-base/type-4/" + infoSelected["base"] + ".png"
            );
            $("#color-down-cut").hide();
            $(".img-cut-down").hide();
        }
        formatPrice();
    });

    // если выбрали вырез майка

    $("#checkbox-4").change(function(e) {
        if ($(this).prop("checked")) {
            let select = $("#select-color-shirt-cut .selected-li"),
                li = select.closest("li"),
                currentColor = li.attr("data-select-img");
            checkCutShirt();
            $("#color-shirt-cut").show();
            $(".img-cut-shirt").show();
        } else {
            // сбрасываем по умолчанию
            $(".img-cut-shirt img").attr(
                "src",
                "assets/constructor/img/3-base/type-2/" + infoSelected["base"] + ".png"
            );
            $("#color-shirt-cut").hide();
            $(".img-cut-shirt").hide();
        }
        formatPrice();
    });

    $("#checkbox-5, #checkbox-6, #checkbox-7").change(function(e) {
        formatPrice();
    });

    $(document).click(function(e) {
        let tg = $(e.target),
            openUl = $(".select-form .select-ul.open");

        // если есть раскрытый список - скрываем его, если кликнули вне его
        if (openUl.length && !tg.closest(openUl).is(openUl)) {
            closeSelect(openUl);
        }
    });

    // отправляем фото чехла на сервер и сохраняем

    $("#btn-submit-img").click(function(e) {
        e.preventDefault();

        $(".open-mp-order-chehol").magnificPopup("open");
    });

    $("#form-order-chechol").submit(function(e) {
        e.preventDefault();
        let form = $(this);
        let dataInfo = {
            colorBase: "Цвет основы: " + $("#colorBase .selected-li").text(),
            colorHead: "Цвет подголовника: " + $("#select-color-head .selected-li").text(),
            colorCenter: "Цвет центра: " + $("#colorCenter .selected-li").text(),
            yzor: "Узор центра: " + $("#yzorCenter .selected-li").text(),
            border: "Дизайн бочков: " + $("#dizaynBorder .selected-li").text(),
            borderCut: "Разрезные бока: " + $("#cutBorder .selected-li").text(),
            seam: "Цвет нити центр: " + $("#hideColorSeam .selected-li").text(),
            seamBord: "Цвет боковой нити: " + $("#hideColorSeamBord .selected-li").text(),
            romb: "",
            cutHead: "",
            cutDown: "",
            shirt: "",
            logos: "",
            double: "",
            price: "Окончательная цена: " + $("#span-end-price").text() + " руб.",
            dopporolon: "",
        };

        let userInfo = {
            name: "ФИО: " + form.find('[name="name"]').val(),
            phone: "Номер телефона: " + form.find('[name="phone"]').val(),
            email: "Email: " + form.find('[name="email"]').val(),
            message: "Комментарий: " + form.find('[name="message"]').val(),
            marka: "Марка и модель авто: " + form.find('[name="marka"]').val(),
            year: "Год выпуска: " + form.find('[name="year"]').val(),
        };

        if (
            $("#dizaynBorder .selected-li").closest("li").attr("data-value") !== "0"
        ) {
            dataInfo["border"] =
                dataInfo["border"] +
                ". Цвет бочков: " +
                $("#hideColorBorder .selected-li").text();
        }

        if ($("#cutBorder .selected-li").closest("li").attr("data-value") !== "0") {
            dataInfo["borderCut"] =
                dataInfo["borderCut"] +
                ". Цвет разрезных бочков: " +
                $("#hideColorBorderCut .selected-li").text();
        }

        if ($("#checkbox-1").prop("checked")) {
            dataInfo["romb"] = "Подголовник ромб: Да";
        } else {
            dataInfo["romb"] = "Подголовник ромб: Нет";
        }
        if ($("#checkbox-2").prop("checked")) {
            dataInfo["cutDown"] =
                "Отрезной низ: Да. Цвет низа: " +
                $("#select-color-down-cut .selected-li").text();
        } else {
            dataInfo["cutDown"] = "Отрезной низ: Нет";
        }
        if ($("#checkbox-3").prop("checked")) {
            dataInfo["cutHead"] =
                "Отрезной верх: Да. Цвет верха: " +
                $("#select-color-head-cut .selected-li").text();
        } else {
            dataInfo["cutHead"] = "Отрезной верх: Нет";
        }
        if ($("#checkbox-4").prop("checked")) {
            dataInfo["shirt"] =
                "Вырез майка: Да. Цвет майки: " +
                $("#select-color-shirt-cut .selected-li").text();
        } else {
            dataInfo["shirt"] = "Вырез майка: Нет";
        }
        if ($("#checkbox-5").prop("checked")) {
            dataInfo["logos"] = "Вышивка логотипов: Да";
        } else {
            dataInfo["logos"] = "Вышивка логотипов: Нет";
        }
        if ($("#checkbox-6").prop("checked")) {
            dataInfo["double"] = "Двойная прострочка: Да";
        } else {
            dataInfo["double"] = "Двойная прострочка: Нет";
        }
        if ($("#checkbox-7").prop("checked")) {
            dataInfo["dopporolon"] = "Дополнительный поролон: Да";
        } else {
            dataInfo["dopporolon"] = "Дополнительный поролон: Нет";
        }

        let dataText = "<h2>Информация о покупателе</h2>";

        $.each(userInfo, function(i, v) {
            dataText += "<p>" + v + "</p>";
        });

        dataText += "<h2>Информация о сформированном заказе</h2>";

        $.each(dataInfo, function(i, v) {
            dataText += "<p>" + v + "</p>";
        });

        //PREPARE DATA FOR MINISHOP2
        const objMod = (i, value) => {
            if (typeof value === "string") {
                return value.replaceAll(/^.+?:/g, "").trim();
            }
            return value;
        };

        const c_options = JSON.stringify(dataInfo, objMod);
        const c_user = JSON.stringify(userInfo, objMod);

        // console.log(c_options)
        // console.log(c_user)

        // let offsetTop = ($('#img-chehol .img-canvas').offset().top * 1);
        //
        //
        // if($(window).width() <= 992 && !$('#no-home-page-id').length){
        // 	offsetTop = 1325;
        // }
        let offsetTop = !$("#no-home-page-id").length ? 1325 : 250;

        $(".open-mp-order-chehol").magnificPopup("close");
        $(".chechol-ajax-loading").fadeIn(100);

        let canvasLayers = $(".img-canvas img")
            .filter(function() {
                return (
                    $(this).css("display") !== "none" &&
                    $(this).parent().css("display") !== "none"
                );
            })
            .toArray()
            .map(function(image) {
                return image.src;
            });

        $.ajax({
            type: "POST",
            url: "/assets/constructor/saveImg.php",
            data: {
                data: data,
                text: dataText,
                emailUser: form.find('[name="email"]').val(),
                c_options: c_options,
                c_user: c_user,
                layers: canvasLayers,
            },
            success: function() {
                $(".close-mp-order-chehol").magnificPopup("open");
                $(".chechol-ajax-loading").fadeOut(100);
                setTimeout(function() {
                    $(".close-mp-order-chehol").magnificPopup("close");
                }, 3000);
            },
        });
    });

    /* Выбери свой стиль */
    $(".select-ul-my-style li").click(function(e) {
        e.preventDefault();
        let ul = $(this).closest("ul"),
            selected = ul.prev(".selected");
        selected.addClass("active");
    });
});