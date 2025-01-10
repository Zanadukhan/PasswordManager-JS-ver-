import request from 'supertest';
import { authController } from '../controllers/authController.js';
import { userinterface_controller } from '../controllers/userInterface_controller.js';
import app from '../app.js'; // Assuming you export the app from app.js
import assert from 'assert';
import { expect } from 'chai';
import Sinon from 'sinon';
import { PrismaClient } from '@prisma/client';



afterEach(function() {
    // Restore all mocks after each test
    sandbox.restore();
});


describe('checkAuthenticated Middleware', function() {
    it('should call next() when user is authenticated', function() {
        const req = {
            isAuthenticated: sandbox.stub().returns(true)
        };
        const res = {
            redirect: sandbox.spy()
        };
        const next = sandbox.spy();

        authController.checkAuthenticated(req, res, next);

        expect(next.calledOnce).to.be.true;
        expect(res.redirect.called).to.be.false;
    });
});
