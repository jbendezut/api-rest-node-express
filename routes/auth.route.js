import { Router } from 'express';
import { login, register } from '../controllers/auth.controller.js';
import { body } from 'express-validator';
import { validationResultExpress } from '../middlewares/validationResutlt.js';

const router = Router();

router.post('/login', [
    body('email', 'formato incorrecto').trim().isEmail().normalizeEmail(),
    body("password", "minimo 6 caracteres").trim().isLength({ min: 6 }),
], validationResultExpress, login);
router.post('/register', [
    body('email', 'formato incorrecto').trim().isEmail().normalizeEmail(),
    body("password", "minimo 6 caracteres").trim().isLength({ min: 6 }),
    body("password", "Password incorreto").trim().isLength({ min: 6 }).custom((value, { req }) => {
        if (value !== req.body.repassword) {
            throw new Error("con coinciden las password");
        }
        return value
    })
], validationResultExpress, register);
export default router;