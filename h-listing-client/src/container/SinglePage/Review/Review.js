import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { IoIosStar, IoIosStarOutline, IoIosArrowDown } from 'react-icons/io';
import { Element } from 'react-scroll';
import Row from 'components/UI/Antd/Grid/Row';
import CommentCard from 'components/UI/CommentCard/CommentCard';
import Col from 'components/UI/Antd/Grid/Col';
import Button from 'components/UI/Antd/Button/Button';
import Input from 'components/UI/Antd/Input/Input';
import Checkbox from 'components/UI/Antd/Checkbox/Checkbox';
import Divider from 'components/UI/Antd/Divider/Divider';
import Modal from 'components/UI/Antd/Modal/Modal';
import Heading from 'components/UI/Heading/Heading';
import Text from 'components/UI/Text/Text';
import ReviewWrapper, {
  HeaderSection,
  RatingStatus,
  FilterElement,
  RatingSearch,
  RatingWrapper,
  TextButton,
} from './Review.style';
const Search = Input.Search;

const Review = props => {
  const {
    ratingCount,
    reviews,
    statusHeadingStyle,
    filterHeadingStyle,
    ratingLabelStyle,
    ratingCountStyle,
  } = props;
  const [visible, setVisible] = useState(false);

  const onChange = e => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <Element name="reviews" className="reviews">
      <ReviewWrapper>
        <HeaderSection>
          <RatingStatus>
            <Heading
              content={`${ratingCount} Reviews`}
              {...statusHeadingStyle}
            />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
          </RatingStatus>
          <RatingSearch>
            <Search
              placeholder="Search reviews"
              onSearch={value => console.log(value)}
            />
            <Button type="primary">Write a Review</Button>
          </RatingSearch>
        </HeaderSection>

        <Row gutter={20}>
          <Col sm={12} lg={9}>
            <Heading content="Traveler Ratings" {...filterHeadingStyle} />
            <FilterElement>
              <Checkbox onChange={onChange}>
                <Text content="Exccellent" as="span" {...ratingLabelStyle} />
                <RatingWrapper>
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <Text content="172" as="span" {...ratingCountStyle} />
                </RatingWrapper>
              </Checkbox>
            </FilterElement>

            <FilterElement>
              <Checkbox onChange={onChange}>
                <Text content="Very Good" as="span" {...ratingLabelStyle} />
                <RatingWrapper>
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStarOutline />
                  <Text content="92" as="span" {...ratingCountStyle} />
                </RatingWrapper>
              </Checkbox>
            </FilterElement>

            <FilterElement>
              <Checkbox onChange={onChange}>
                <Text content="Average" as="span" {...ratingLabelStyle} />
                <RatingWrapper>
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStarOutline />
                  <IoIosStarOutline />
                  <Text content="34" as="span" {...ratingCountStyle} />
                </RatingWrapper>
              </Checkbox>
            </FilterElement>

            <FilterElement>
              <Checkbox onChange={onChange}>
                <Text content="Poor" as="span" {...ratingLabelStyle} />
                <RatingWrapper>
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStarOutline />
                  <IoIosStarOutline />
                  <IoIosStarOutline />
                  <Text content="11" as="span" {...ratingCountStyle} />
                </RatingWrapper>
              </Checkbox>
            </FilterElement>
          </Col>

          <Col sm={12} lg={5}>
            <Heading content="Traveler Type" {...filterHeadingStyle} />
            <FilterElement>
              <Checkbox onChange={onChange}>
                <Text content="Families" as="span" {...ratingLabelStyle} />
              </Checkbox>
            </FilterElement>

            <FilterElement>
              <Checkbox onChange={onChange}>
                <Text content="Couples" as="span" {...ratingLabelStyle} />
              </Checkbox>
            </FilterElement>

            <FilterElement>
              <Checkbox onChange={onChange}>
                <Text content="Solo" as="span" {...ratingLabelStyle} />
              </Checkbox>
            </FilterElement>

            <FilterElement>
              <Checkbox onChange={onChange}>
                <Text content="Business" as="span" {...ratingLabelStyle} />
              </Checkbox>
            </FilterElement>
          </Col>

          <Col sm={12} lg={5}>
            <Heading content="Time Of Year" {...filterHeadingStyle} />
            <FilterElement>
              <Checkbox onChange={onChange}>
                <Text content="Jan-Mar" as="span" {...ratingLabelStyle} />
              </Checkbox>
            </FilterElement>

            <FilterElement>
              <Checkbox onChange={onChange}>
                <Text content="Apr-Jun" as="span" {...ratingLabelStyle} />
              </Checkbox>
            </FilterElement>

            <FilterElement>
              <Checkbox onChange={onChange}>
                <Text content="Jul-Sep" as="span" {...ratingLabelStyle} />
              </Checkbox>
            </FilterElement>

            <FilterElement>
              <Checkbox onChange={onChange}>
                <Text content="Oct-Dec" as="span" {...ratingLabelStyle} />
              </Checkbox>
            </FilterElement>
          </Col>

          <Col sm={12} lg={5}>
            <Heading content="Languages" {...filterHeadingStyle} />
            <FilterElement>
              <Checkbox onChange={onChange}>
                <Text content="All Languages" as="span" {...ratingLabelStyle} />
              </Checkbox>
            </FilterElement>

            <FilterElement>
              <Checkbox onChange={onChange}>
                <Text content="English" as="span" {...ratingLabelStyle} />
              </Checkbox>
            </FilterElement>

            <FilterElement>
              <Checkbox onChange={onChange}>
                <Text content="Spanish" as="span" {...ratingLabelStyle} />
              </Checkbox>
            </FilterElement>

            <TextButton onClick={() => setVisible(true)}>
              More Language <IoIosArrowDown />
            </TextButton>

            <Modal
              width={320}
              visible={visible}
              onCancel={() => setVisible(false)}
              footer={null}
              maskStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
              wrapClassName="language_modal"
            >
              <Heading content="Languages" {...filterHeadingStyle} />
              <FilterElement>
                <Checkbox onChange={onChange}>
                  <Text
                    content="All Languages"
                    as="span"
                    {...ratingLabelStyle}
                  />
                </Checkbox>
              </FilterElement>

              <FilterElement>
                <Checkbox onChange={onChange}>
                  <Text content="English" as="span" {...ratingLabelStyle} />
                </Checkbox>
              </FilterElement>

              <FilterElement>
                <Checkbox onChange={onChange}>
                  <Text
                    content="Chinese (Sim.)"
                    as="span"
                    {...ratingLabelStyle}
                  />
                </Checkbox>
              </FilterElement>

              <FilterElement>
                <Checkbox onChange={onChange}>
                  <Text
                    content="Chinese (Trad.)"
                    as="span"
                    {...ratingLabelStyle}
                  />
                </Checkbox>
              </FilterElement>

              <FilterElement>
                <Checkbox onChange={onChange}>
                  <Text content="Spanish" as="span" {...ratingLabelStyle} />
                </Checkbox>
              </FilterElement>

              <FilterElement>
                <Checkbox onChange={onChange}>
                  <Text content="German" as="span" {...ratingLabelStyle} />
                </Checkbox>
              </FilterElement>

              <FilterElement>
                <Checkbox onChange={onChange}>
                  <Text content="Italian" as="span" {...ratingLabelStyle} />
                </Checkbox>
              </FilterElement>

              <FilterElement>
                <Checkbox onChange={onChange}>
                  <Text content="French" as="span" {...ratingLabelStyle} />
                </Checkbox>
              </FilterElement>

              <FilterElement>
                <Checkbox onChange={onChange}>
                  <Text content="Russian" as="span" {...ratingLabelStyle} />
                </Checkbox>
              </FilterElement>
            </Modal>
          </Col>
        </Row>
        {/* end of filter elements */}

        {reviews && reviews.length !== 0
          ? reviews.map((singleReview, i) => {
              return (
                <Fragment key={i}>
                  <Divider />
                  <CommentCard singleReview={singleReview} />
                </Fragment>
              );
            })
          : 'No Review Found'}
      </ReviewWrapper>
    </Element>
  );
};

Review.propTypes = {
  statusHeadingStyle: PropTypes.object,
  filterHeadingStyle: PropTypes.object,
  ratingLabelStyle: PropTypes.object,
  ratingCountStyle: PropTypes.object,
};

Review.defaultProps = {
  statusHeadingStyle: {
    color: '#2C2C2C',
    fontSize: ['17px', '20px', '25px'],
    mr: '10px',
  },
  filterHeadingStyle: {
    color: '#2C2C2C',
    fontSize: '15px',
    fontWeight: '700',
    lineHeight: '1.2',
    mb: '0.5em',
  },
  ratingLabelStyle: {
    fontSize: '13px',
    fontWeight: '400',
    color: '#2c2c2c',
    flex: '1',
  },
  ratingCountStyle: {
    fontSize: '13px',
    fontWeight: '400',
    color: '#2c2c2c',
    ml: '8px',
  },
};

export default Review;
