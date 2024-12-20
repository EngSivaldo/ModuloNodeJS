import Joi from 'joi';

// Importação do Joi:
// - Joi é uma biblioteca de validação de dados para JavaScript.

/**
 * Função de Validação (Closure):
 * - `validation` é uma função que recebe um esquema Joi e retorna uma função de validação.
 * - A função retornada (`validateInfo`) valida as informações fornecidas de acordo com o esquema, sem abortar na primeira falha (`abortEarly: false`).
 */
const validation = (schema) => {
  return function validateInfo(information) {
    return schema.validate(information, { abortEarly: false });
  };
};

const driverSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  team: Joi.string().min(3).max(50).required(),
  points: Joi.number().min(0).max(1000).default(0),
});

// Esquema de Validação para Driver:
// - Define as regras de validação para um driver.
// - `name` e `team` devem ser strings com comprimento entre 3 e 50 caracteres e são obrigatórios.
// - `points` deve ser um número entre 0 e 1000, com valor padrão de 0.

const updateDriverSchema = Joi.object({
  name: Joi.string().min(3).max(50),
  team: Joi.string().min(3).max(50),
  points: Joi.number().min(0).max(1000),
}).min(1);

// Esquema de Validação para Atualização de Driver:
// - Define as regras de validação para atualizar um driver.
// - `name`, `team` e `points` seguem as mesmas regras do esquema de driver, mas não são obrigatórios.
// - Pelo menos um dos campos deve estar presente (`min(1)`).

export const validateDriverInfo = validation(driverSchema);
export const validateUpdateDriverInfo = validation(updateDriverSchema);
export const validatePosition = (position, maxValue) =>
  Joi.number().min(1).max(maxValue).validate(position);

// Exportação das Funções de Validação:
// - `validateDriverInfo` valida as informações de um novo driver usando `driverSchema`.
// - `validateUpdateDriverInfo` valida as informações de atualização de um driver usando `updateDriverSchema`.
// - `validatePosition` valida a posição de um driver, garantindo que esteja entre 1 e o valor máximo fornecido.