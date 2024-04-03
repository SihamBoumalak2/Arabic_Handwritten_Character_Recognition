from flask import Flask, request, jsonify
from keras.models import load_model
import numpy as np
from PIL import Image
import io
from flask_cors import CORS, cross_origin


app = Flask(__name__)
CORS(app, support_credentials=True)

model = load_model('C:\\Users\\bouma\\Downloads\\Intermediate_code\\Models\\IS_THE_arabic_handwriting_model.h5')  # Load your trained model

@app.route('/convert', methods=['POST'])
@cross_origin(origin='*')
def convert():
    # Convert the uploaded image to the format expected by the model
    image = Image.open(io.BytesIO(request.files['file'].read())).convert('L')
    image = image.resize((32, 32))
    image = np.array(image).reshape(1, 32, 32, 1) / 255.0

    # Predict the character
    prediction = model.predict(image)
    predicted_class = np.argmax(prediction, axis=1)[0]

    # Map the predicted class to the corresponding Arabic character
    arabic_character = map_class_to_character(predicted_class)

    return jsonify({'character': arabic_character})

# def map_class_to_character(class_index):
    # Implement this function to map the class index to the corresponding Arabic character
    # return str(class_index)  # Placeholder implementation
    
    
def map_class_to_character(class_index):
    # Dictionary mapping class indices to Arabic characters
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
    # Return the corresponding Arabic character or a default message if not found
    return class_to_character.get(class_index, "لا أعلم ما هذا الحرف!")

if __name__ == '__main__':
    app.run(debug=True)
    




# from flask import Flask, request, jsonify
# import numpy as np
# from PIL import Image
# from tensorflow.keras.models import load_model
# from tensorflow.keras.layers import Input, Conv2D, MaxPooling2D, Flatten, Dense
# from tensorflow.keras.models import Sequential

# app = Flask(__name__)
# model = Sequential([
#     Input(shape=(32, 32, 1)),  # Specify the input shape here
#     Conv2D(32, 3, padding='same', activation='relu'),  
#     MaxPooling2D(2,2),
#     Conv2D(64, 3, padding='same', activation='relu'),
#     MaxPooling2D(2,2),
#     Conv2D(128, 3, padding='same', activation='relu'),
#     MaxPooling2D(2,2),
#     Conv2D(64, 3, padding='same', activation='relu'),
#     MaxPooling2D(2,2),
#     Flatten(),
#     Dense(128, activation='relu'),
#     Dense(256, activation='relu'),
#     Dense(28, activation='softmax')
# ])
# model.load_weights(r'C:/Users/bouma/Downloads/Intermediate_code/Models/IS_THE_arabic_handwriting_model.h5')


# @app.route('/predict', methods=['POST'])
# def predict():
#     file = request.files['file']
#     image = Image.open(file)
#     image = preprocess_image(image)
#     prediction = model.predict(image)
#     predicted_class = np.argmax(prediction)
#     return jsonify({'predicted_class': int(predicted_class)})

# def preprocess_image(image):
#     # Resize image to match input dimensions of your model
#     image = image.resize((32, 32))
#     # Convert image to grayscale
#     image = image.convert('L')
#     # Normalize pixel values
#     image = np.array(image) / 255.0
#     # Reshape image for model input
#     image = image.reshape(1, 32, 32, 1)
#     return image

# if __name__ == '__main__':
#     app.run(debug=True)


