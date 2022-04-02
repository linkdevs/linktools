import sharp from 'sharp';
import fs from 'fs';

const getFormData = (request) => {

};

console.clear();
export default async (req, res) => {
    const response = {};


    if (req.method === 'POST') {
        const { file, ...body } = req.body;

        const extensions = ["jpg", "jpeg", "png", "gif"];
        if (!file) return res.status(400).json({ error: 'No file was provided' });
        if (!file.startsWith('data:image/')) return res.status(400).json({ error: 'File is not an image' });

        const base64Data = file.replace(/^data:image\/\w+;base64,/, "");
        const fileBuffer = new Buffer(base64Data, 'base64');
        const metadata = await sharp(fileBuffer).metadata();

        var sharped = await sharp(fileBuffer)
            .resize(512)
            .toFormat("jpeg", { mozjpeg: true })
            .toBuffer();

        response.base64_image = sharped.toString('base64');

        return res.status(200).json({ ...response });
    }

    return req.status(405).send('Method Not Allowed');
}