from flask import Flask, request, jsonify
from keras.models import load_model
import numpy as np
from PIL import Image
import io
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app, support_credentials=True)
model = load_model('C:\\Users\\bouma\\Downloads\\Intermediate_code\\Models\\IS_THE_arabic_handwriting_model.h5')  
@app.route('/convert', methods=['POST'])
@cross_origin(origin='*')
def convert():
    image = Image.open(io.BytesIO(request.files['file'].read())).convert('L')
    image = image.resize((32, 32))
    image = np.array(image).reshape(1, 32, 32, 1) / 255.0
    prediction = model.predict(image)
    predicted_class = np.argmax(prediction, axis=1)[0]
    arabic_character = map_class_to_character(predicted_class)
    return jsonify({'character': arabic_character})

def map_class_to_character(class_index):
    class_to_character = {
        1: "الف",
        2: "باء",
        3: "تاء",
        4: "ثاء",
        5: "جيم",
        6: "حاء",
        7: "خاء",
        8: "دال",
        9: "ذال",
        10: "راء",
        11: "زين",
        12: "سين",
        13: "شين",
        14: "صاد",
        15: "ضاد",
        16: "طاء",
        17: "ظاء",
        18: "عين",
        19: "غين",
        20: "فاء",
        21: "قاف",
        22: "كاف",
        23: "لام",
        24: "ميم",
        25: "نون",
        26: "هاء",
        27: "واو",
        28: "ياء"
    }
    return class_to_character.get(class_index, "لا أعلم ما هذا الحرف!")

if __name__ == '__main__':
    app.run(debug=True)
    
