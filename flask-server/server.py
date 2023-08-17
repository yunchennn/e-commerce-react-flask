from flask import Flask, request, jsonify
import json

app = Flask(__name__)

@app.route('/api/save-font', methods=['POST'])
def save_font():
    font_data = request.json  # Assuming JSON data contains multiple fields

    # Load existing data from the JSON file if it exists
    try:
        with open('font_data.json', 'r') as json_file:
            all_data = json.load(json_file)
    except (FileNotFoundError, json.JSONDecodeError):
        all_data = []

    # Append the new data
    all_data.append(font_data)

    # Save the data to the JSON file
    with open('font_data.json', 'w') as json_file:
        json.dump(all_data, json_file, indent=4)

    return jsonify({'message': 'Font data saved successfully'})

if __name__ == '__main__':
    app.run(debug=True)
