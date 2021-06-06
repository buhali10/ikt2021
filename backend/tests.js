import chai from 'chai';
import chaiHttp from 'chai-http';
import { app as server } from './server.js';

let should = chai.should();
let expect = chai.expect;

chai.use(chaiHttp);

describe('Posts', () => {
    /*
     * Test the /GET route
     */
    describe('/GET /posts', () => {
        it('it should GET all the posts', (done) => {
            chai.request(server)
                .get('/posts')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(3);
                    done();
                });
        });
    });

    describe('/POST /posts', () => {
        it('it should not POST a post without images field', (done) => {
            let post = {
                title: "another test post",
                location: "Treskowallee 8"
            }
            chai.request(server)
                .post('/posts')
                .send(post)
                .end((err, res) => {
                    res.should.have.status(500);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message');
                    expect(res.body.message).to.include('image');
                    done();
                });
        });
    });

});
