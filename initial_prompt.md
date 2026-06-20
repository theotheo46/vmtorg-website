# PROMPTS TEMPLATES

## DESK

Исходный промпт:

```
Создай фотореалистичное изображение стола на основе референса:
- Материал столешницы задай `Американский орех`, остальные материалы возьми с референса.
- Задай реалистичную текстуру столешницы с учетом пористости и прочих артефактов которые присущи естественной обработке натурального дерева.
- Раздели стол на четыре квадранта с едва заметной фаской. В каждом квадранте задай свое направление текстуры по диагонали, при этом направление текстуры в квадрантах по диагонали должно совпадать.
- Не помещай на стол никаких предметов и кроме стола в кадре ничего не должно быть. 
- Стол должен попасть в кадр полностью как на референсе и в той же проекции как на референсе.
- Не меняй пропорции, не дорисовывай новые детали.
```
Создай на его основе промпт на английском в формате Markdown для использования его для генерации изображения в Gemini. 


**Generate a photorealistic image of a table based on the provided reference image, strictly following these parameters:**

* **Materials & Texture:** The tabletop must be made of **American Walnut**. Keep the materials of the table legs/base exactly as they are in the reference.
* **Surface Details:** Render a highly realistic wood texture. Include natural porosity, subtle grain variations, and authentic imperfections typical of naturally treated solid wood.
* **Tabletop Design:** The tabletop must be divided into four equal quadrants separated by a barely noticeable, delicate chamfer (groove). Each quadrant must have its wood grain running diagonally. Ensure that the diagonal grain direction in opposite quadrants matches perfectly.
* **Scene Composition:** The tabletop must be completely empty. There should be absolutely no objects on the table, and nothing else in the frame except the table itself (use a clean, isolated background).
* **Framing & Perspective:** The entire table must be fully visible within the frame. Match the exact camera projection, angle, and perspective of the reference image.
* **Strict Constraints:** Maintain the exact proportions of the reference. Do not hallucinate or add any new details, decorations, or elements that are not present in the original design.

## CHEST

Исходный промпт:
```
Создай фотореалистичное изображение комода на основе референса:
- Материал поверхности и верхнего ряда дверей задай `Американский орех` с использованием технологии раскладки mix match, остальные материалы возьми с референса.
- Нижний ряд - прозрачное стекло. Задай реалистичную текстуру поверхности с учетом пористости и прочих артефактов которые присущи естественной обработке натурального дерева. 
- На верхней поверхности изобрази едва видимый стык который будет разделять левые три и правые три секции - стык должен быть едва виден.
- Не повторяй один и тот же элемент текстуры для передних панелей - создай 6 разных элементов текстуры для них. Панели должны отличаться своей текстурой - но незначительно - можно взять исходную структуру и слегка ее поворачивать. Для верхних панелей сделай два варианта текстуры - разделенные стыком
- Металлическую окантовку стекол сделай не в виде единого объекта а в виде 4х секций соединенными стыками - цвет окантовки черный. Стык должен быть виден
- Цвет ручек - `состаренное золото`.
- Полки внутри должны быть стеклянными
- Не помещай внутрь никаких предметов и кроме комода в кадре ничего не должно быть.
- Комод должен попасть в кадр полностью как на референсе и в той же проекции как на референсе. Не располагай его в фронтальной проекции - покажи в изометрии
- Не меняй пропорции, не дорисовывай новые детали.
- Задай источник света спереди - тень назад
```
Создай на его основе промпт на английском в формате Markdown для использования его для генерации изображения в Gemini. 


**Create a photorealistic image of a six-section dresser (sideboard) based on the provided reference image.**

**Camera & Composition:**
*   **Perspective:** Isometric projection (angled view, strictly avoid a flat frontal view). Show the dresser in the exact same projection as the reference.
*   **Framing:** The entire dresser must fit completely within the frame.
*   **Environment:** Completely isolated. There must be absolutely nothing else in the frame except the dresser. 
*   **Content:** Do not place any objects inside the dresser. The shelves behind the glass must be completely empty.
*   **Fidelity:** Strictly maintain the original proportions. Do not invent or add any new structural details.

**Materials & Textures:**
*   **Wood:** The top surface and the top row of doors must be **American Walnut**, utilizing a "mix-match" veneer layout technique.
*   **Wood Realism:** Highly realistic natural wood texture. It must display natural porosity, grain variations, and subtle artifacts inherent to naturally processed wood.
*   **Texture Variation:** Do not use a tiled or repeating wood grain pattern for the front panels. Create **6 distinct wood grain elements** for them (the base structure can be slightly rotated or shifted so each panel looks naturally unique but cohesive). For the top surface, use two slightly different texture variations separated by a seam.
*   **Bottom Row:** The lower row of doors must be made of transparent glass.
*   **Other Materials:** Keep the rest of the materials exactly as they are in the reference.

**Specific Details:**
*   **Top Surface Seam:** Add a very subtle, barely visible seam exactly in the middle of the top surface, dividing the three left sections from the three right sections.
*   **Metal Framing:** The black metal framing around the glass doors must not be a single continuous molded piece. It must be constructed from **4 separate sections with visibly defined joints/seams** where they connect.
*   **Hardware:** The handles must be colored **antique gold**.

**Lighting:**
*   **Light Source:** Directional lighting coming from the front, casting realistic shadows directly backward.

----------

**Generate a highly photorealistic image of a credenza/dresser based on the provided reference.** **Perspective and Composition:**
* **Camera Angle:** Isometric projection (strictly avoid flat, frontal views). Match the exact perspective of the reference image.
* **Framing:** The entire dresser must fit completely within the frame without any cropping.
* **Environment:** Completely isolated. The dresser must be absolutely empty inside, and there must be zero background objects or decor in the scene. 
* **Lighting:** Frontal light source, with the shadows falling straight back behind the object.

**Materials and Textures:**
* **Wood Surfaces (Top surface and upper row of doors):** American Walnut wood. Apply a "mix match" veneer layout technique. The wood texture must be hyper-realistic, clearly showing natural porosity and authentic processing artifacts inherent to natural wood.
* **Lower Section:** Transparent glass doors.
* **Interior:** Transparent glass shelves.
* **Hardware:** Handles must be "antiqued gold" (aged gold) in color.

**Intricate Details & Variations:**
* **Wood Grain Variation:** Do not repeat the exact same wood texture map. Generate 6 distinct but subtly varying wood grain patterns for the front panels (e.g., by slightly rotating or shifting the base texture). For the top surface, use 2 distinct texture variations separated by the seam.
* **Top Surface Seam:** Create a barely visible, subtle seam exactly down the middle of the top surface, dividing the three left sections from the three right sections.
* **Metal Framing:** The black metal frames around the lower glass doors must not be a single, seamless object. They must be constructed from 4 distinct sections with clearly visible joining seams at the connections.

**Strict Constraints:**
* Keep any remaining materials exactly as they appear in the reference image.
* Strictly maintain the original proportions. Do not invent, hallucinate, or add any new decorative elements or details.

## WINE CABINET


Исходный промпт:
```
Создай фотореалистичное изображение винного шкафа на основе референса wine_cabinet_1.png:
- Материал поверхности и нижнего ряда дверей задай `Американский орех` с использованием технологии раскладки mix match, остальные материалы возьми с референса. Задай реалистичную текстуру поверхности с учетом пористости и прочих артефактов которые присущи естественной обработке натурального дерева.
- Верхние два ряда - прозрачное стекло. 
- На верхней поверхности изобрази едва видимые три стыка который будет разделять 4 секции - стык должен быть едва виден.
- Не повторяй один и тот же элемент текстуры для передних панелей - создай разные элементы текстуры для них. Панели должны отличаться своей текстурой - но незначительно - можно взять исходную структуру и слегка ее поворачивать. Для верхних панелей сделай 4 варианта текстуры - разделенные стыками
- Металлическую окантовку стекол сделай не в виде единого объекта а в виде 4х секций соединенными стыками - цвет окантовки черный. Стык должен быть виден
- полки внутри шкафа должны быть стеклянными
- ручки должны выглядеть как плоские длинные планки расположенные вдоль длинной стороны дверок - пример ручек на референсе wine_cabinet_with_handles.jpeg, возьми из этого референса только расположение и форму ручек
- Цвет ручек - `состаренное золото`.
- Не помещай внутрь никаких предметов и кроме шкафа в кадре ничего не должно быть.
- Шкаф должен попасть в кадр полностью как на референсе и в той же проекции как на референсе. Не располагай его в фронтальной проекции - покажи в изометрии
- Не меняй пропорции, не дорисовывай новые детали.
- Задай источник света спереди - тень назад
```
Создай на его основе промпт на английском в формате Markdown для использования его для генерации изображения в Gemini. 


A photorealistic, high-resolution product photograph of the entire wine cabinet, accurately maintaining the proportions, full frame perspective, and isometric angle as seen in `wine_cabinet_1.png`. The cabinet must not be viewed frontally. The setting is clean with no other objects; only the cabinet is in the frame. Lighting must come from the front, casting a realistic shadow towards the back.

Structural and material details:
- **Top surface and lower row of four doors:** Must be finished in natural American Walnut wood using a "mix-match" veneer layout technology. The surface must feature a highly realistic, porous texture, complete with natural imperfections and artifacts typical of authentic, naturally treated wood.
- **Top surface variation:** On the top surface, four distinct sections must be visible, separated by three barely visible, subtle seams, making them appear as distinct panels.
- **Door front variation:** Each of the front door panels must have a unique, non-repeating grain texture. For the upper rows, create four distinct texture variations, separated by the seams; for the lower doors, use subtle variations, such as slightly rotating the source grain structure, to make them distinctly different yet unified.
- **Upper two rows of doors:** Must be clear transparent glass.
- **Glass framing:** The metal framing around the glass doors must not be a single continuous object. It must be constructed as four separate sections joined by clearly visible, distinct seams/joints.
- **Frame color:** Matte black.
- **Interior:** The shelves inside the cabinet must be transparent glass. The cabinet must be completely empty inside.
- **Handles:** Long, flat strip handles running along the entire long edge of each door. The specific shape and long vertical placement must exactly match the style seen in `wine_cabinet_with_handles.jpeg`, taking *only* the handle type and position from this reference.
- **Handle color:** Aged gold.

**Crucial Constraints:**
- Do not add any extra decorative details.
- Do not change the overall proportions of the cabinet.
- Do not place any items inside the cabinet.
- Strictly adhere to the mixed material palette as specified.

## Flower stand

Исходный промпт:
```
Создай фотореалистичное изображение подставки для цветов на основе референса:
- Материал поверхности задай `Американский орех` с использованием технологии раскладки mix match. Задай реалистичную текстуру поверхности с учетом пористости и прочих артефактов которые присущи естественной обработке натурального дерева.
- Не повторяй один и тот же элемент текстуры для панелей - создай разные элементы текстуры для них.
- Предмет должен попасть в кадр полностью как на референсе и в той же проекции как на референсе. Не располагай его в фронтальной проекции - покажи в изометрии
- Не меняй пропорции, не дорисовывай новые детали.
- Задай источник света спереди - тень назад
```
Создай на его основе промпт на английском в формате Markdown для использования его для генерации изображения в Gemini. 


Generate a photorealistic image of a flower stand based strictly on the provided reference image. Follow these specific parameters:

* **Material & Texture:** The surface material must be `American Walnut` using a "mix match" veneer layout technique. Render a highly realistic wood texture, explicitly including natural porosity, grain variations, and other authentic artifacts typical of naturally treated solid wood.
* **Texture Variation:** Do not tile or repeat the same texture pattern across the panels. Each panel must feature a unique, non-repeating wood grain element.
* **Framing & Perspective:** The entire object must be fully visible within the frame, matching the exact framing of the reference. Use an **isometric projection** (strictly avoid flat, frontal orthographic views).
* **Fidelity:** Strictly maintain the exact proportions of the reference. Do not alter the design, and do not add any new details or decorative elements.
* **Lighting:** Apply a frontal light source, ensuring that the shadows are naturally cast towards the back of the scene.


## Coffee table

Исходный промпт:
```
Создай фотореалистичное изображение журнального столика на основе референса:
- Материал столешницы задай `Мрамор`
- Материал ножек задай `Американский орех`.
- Задай реалистичную текстуру поверхности с учетом пористости и прочих артефактов которые присущи естественной обработке натурального дерева или камня.
- Не повторяй один и тот же элемент текстуры столешниц - создай разные элементы текстуры для них.
- Предмет должен попасть в кадр полностью как на референсе и в той же проекции как на референсе. Не располагай его в фронтальной проекции - покажи в изометрии
- Не меняй пропорции, не дорисовывай новые детали.
- Задай источник света спереди - тень назад
```
Создай на его основе промпт на английском в формате Markdown для использования его для генерации изображения в Gemini. 


**Task:** Generate a photorealistic image of a coffee table based strictly on the provided reference image.

**Materials & Textures:**
* **Tabletop:** Marble. 
* **Legs:** American Walnut.
* **Surface Details:** Highly realistic textures capturing the natural porosity, imperfections, and artifacts inherent to naturally processed stone and wood.
* **Texture Variation:** Ensure the marble veining and patterns are unique and non-repeating across the surface (no cloned or tiled patterns).

**Composition & Camera Angle:**
* **Framing:** The entire object must fit completely within the frame, exactly as shown in the reference.
* **Projection:** Isometric view. Strictly avoid a flat, frontal projection; match the exact angle and perspective of the reference.
* **Fidelity:** Maintain the exact original proportions. Do not invent or add any new details to the design.

**Lighting & Shadows:**
* **Lighting:** Frontal light source.
* **Shadows:** Cast shadows directly backward, away from the camera.

## Table

Исходный промпт:
```
Создай фотореалистичное изображение стола на основе референса:
- Материал столешницы задай `Американский орех`, Задай реалистичную текстуру поверхности с учетом пористости и прочих артефактов которые присущи естественной обработке натурального дерева.
- Материал ножек задай черный металл.
- Предмет должен попасть в кадр полностью как на референсе и в той же проекции как на референсе. Не располагай его в фронтальной проекции - покажи в изометрии
- Не меняй пропорции, не дорисовывай новые детали.
- Задай источник света спереди - тень назад
```
Создай на его основе промпт на английском в формате Markdown для использования его для генерации изображения в Gemini. 

Generate a photorealistic image of a table based on the provided reference image, strictly adhering to the following parameters:

* **Tabletop Material:** `American Walnut`. Render a highly realistic surface texture, capturing the natural grain, porosity, and subtle artifacts characteristic of naturally treated solid wood.
* **Legs Material:** Black metal.
* **Framing and Projection:** The entire table must fit completely within the frame. Render it in an isometric perspective, matching the exact angle of the reference. Do not use a flat, frontal view.
* **Fidelity:** Strictly maintain the original proportions. Do not add any new details, extra elements, or structural changes.
* **Lighting:** Position the primary light source at the front, casting the shadow directly towards the back.

## Conference table

Исходный промпт:
```
Создай фотореалистичное изображение стола для конференций на основе референса:
- Материал столешницы  и ножек задай `Американский орех`, задай реалистичную текстуру поверхности с учетом пористости и прочих артефактов которые присущи естественной обработке натурального дерева.
- Предмет должен попасть в кадр полностью как на референсе и в той же проекции как на референсе - но опусти камеру чуть ниже.
- Не меняй пропорции, не дорисовывай новые детали.
- Задай источник света спереди
```
Создай на его основе промпт на английском в формате Markdown для использования его для генерации изображения в Gemini. 

Generate a photorealistic image of a conference table based on the provided reference image, strictly following these parameters:

*   **Material & Texture:** Set the material for both the tabletop and legs to `American Walnut`. Render a highly realistic surface texture that captures the natural wood grain, porosity, and slight imperfections typical of naturally treated solid wood.
*   **Composition & Framing:** The entire table must fit completely within the frame. Keep the exact same projection and perspective as the reference image, but lower the camera angle slightly.
*   **Fidelity:** Maintain the exact original proportions. Do not add, alter, or hallucinate any new details or elements not present in the reference.
*   **Lighting:** Apply a clean, frontal light source directly illuminating the table.

## OFFICE

Исходный промпт:
```
Создай фотореалистичное изображение кабинета руководителя на основе референсных изображений - executive desk (`executive_desk_pro_7.png`), chest (`chest_pro_mm_3_nologo.png`), wine cabinet (`wine_cabinet_pro_2_nologo.png`), tv stand (`tv_stand.png`), and a wall-mounted table (`wall-mounted-table.png`):
- центр композиции - executive desk
- остальные элементы расположены вокруг.
- на tv stand установи плазменный телевизор в выключенном состоянии
- формат кадра - 16:9
```
Создай на его основе промпт на английском в формате Markdown для использования его для генерации изображения в Gemini, используй точные названия референсных изображений. 


Generate a photorealistic image of an executive office interior incorporating the following reference items: an executive desk (`executive_desk_pro_7.png`), a chest (`chest_pro_mm_3_nologo.png`), a wine cabinet (`wine_cabinet_pro_2_nologo.png`), a TV stand (`tv_stand.png`), and a wall-mounted table (`wall-mounted-table.png`).

Please follow these specific composition details:
* **Center of the composition:** The executive desk.
* **Arrangement:** Position the rest of the furniture elements harmoniously around the desk.
* **Details:** Place a flat-screen plasma TV, turned off (black screen), on top of the TV stand.
* **Aspect Ratio:** 16:9

## VIDEO

Исходный промпт:
```
Создай видео ролик облета камерой кабинета руководителя на основе референсного изображения:
- центр композиции - executive desk
- камера облетает оффис и возвращается в исходную точку осуществляя поворот на 360 градусов
- движение камеры должны быть плавные без рывков
```
Создай на его основе промпт на английском в формате Markdown для использования его для генерации видео в Gemini. 


**Action Prompt:**
Generate a realistic, cinematic video flying through an executive office based on the provided reference image. 

**Composition & Subject:**
- The absolute center of the composition must remain the **executive desk** throughout the entire video. 

**Camera Movement:**
- Execute a continuous, **360-degree orbit/fly-through** around the office. 
- The camera must seamlessly return exactly to its original starting point, creating a perfect, closed loop.
- The camera motion must be incredibly **smooth, fluid, and cinematic**, with absolutely no jerks, stuttering, or sudden shifts in speed.

